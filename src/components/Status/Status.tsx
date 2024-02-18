import React, { ChangeEvent, DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { ReactNode } from 'react';
import style from './status.module.css';
import InputField from '../InputField/InputField';

type StatusProps = {
  status: string;
  setProfileStatus: (status: string) => void;
} & DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type StatusState = {
  status: string;
  edditMode: boolean;
};

class Status extends React.Component<StatusProps, StatusState> {
  state = {
    status: this.props.status,
    edditMode: false,
  };
  constructor(props: StatusProps) {
    super(props);
  }
  componentDidUpdate(prevProps: Readonly<StatusProps>): void {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  activeteEdditMode = () => {
    this.setState({ edditMode: true });
  };
  deactiveteEdditMode = () => {
    this.setState({ edditMode: false });
    if (this.state.status !== this.props.status) {
      this.props.setProfileStatus(this.state.status);
    }
  };
  onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: e.currentTarget.value });
  };

  render(): ReactNode {
    return (
      <div className={this.props.className}>
        {this.state.edditMode ? (
          <InputField
            className={style.inputField}
            onBlur={this.deactiveteEdditMode}
            autoFocus
            onChange={this.onInputChange}
            value={this.state.status}
          />
        ) : (
          <div className={style.statusText} onDoubleClick={this.activeteEdditMode}>
            <span className={style.statusTextHead}>Status: </span>
            {this.props.status}
          </div>
        )}
      </div>
    );
  }
}

export default Status;
