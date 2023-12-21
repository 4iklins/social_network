import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import style from './linearprogress.module.css';

interface ILinearProgress extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const LiearProgress = ({ className }: ILinearProgress) => {
  return (
    <div className={style.progressBody + ' ' + className}>
      <div className={style.progressIndicator}></div>
    </div>
  );
};

export default LiearProgress;
