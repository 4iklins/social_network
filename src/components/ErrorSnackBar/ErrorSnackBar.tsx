import React from 'react';
import style from './erroesnackbar.module.css';
import { connect } from 'react-redux';
import { StateType } from '../../redux/store';
import { setAppErrorAC } from '../../redux/app-reducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

type ErrorSnackBarState = {
  timerId: number | undefined;
};

class ErrorSnackBar extends React.Component<ErroSnackBarProps, ErrorSnackBarState> {
  state = {
    timerId: undefined,
  };
  constructor(props: ErroSnackBarProps) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose() {
    debugger;
    this.props.setError('');
  }
  componentDidMount(): void {
    debugger;
    window.clearTimeout(this.state.timerId);
    let id = window.setTimeout(() => {
      this.props.setError('');
    }, 4000);
    console.log(id);
    this.setState({
      timerId: id,
    });
  }

  componentDidUpdate(prevProps: Readonly<ErroSnackBarProps>, prevState: Readonly<{}>, snapshot?: any): void {
    debugger;
    if (prevProps.error !== this.props.error) {
      window.clearTimeout(this.state.timerId);
      let id = window.setTimeout(() => {
        this.props.setError('');
      }, 4000);
      console.log(id);
      this.setState({
        timerId: id,
      });
    }
  }
  render() {
    return (
      <div className={style.errorSnackBar} onClick={this.handleClose}>
        {this.props.error}
      </div>
    );
  }
}
type ErroSnackBarProps = mapStateToPropsType & mapDispatchToPropsType;
type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: StateType) => {
  return {
    error: state.app.error,
  };
};
const mapDispatchToProps = (dispatch: ThunkDispatch<StateType, unknown, AnyAction>) => {
  return {
    setError: (error: string) => dispatch(setAppErrorAC(error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorSnackBar);
