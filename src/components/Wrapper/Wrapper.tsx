import { DetailedHTMLProps, HTMLAttributes } from 'react';
import style from './wrapper.module.css';

const Wrapper = ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return <div className={style.container}>{children}</div>;
};

export default Wrapper;
