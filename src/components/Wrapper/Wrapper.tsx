import { DetailedHTMLProps, HTMLAttributes } from 'react';
import style from './wrapper.module.css';

const Wrapper = ({ className, children }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return <div className={style.container + ' ' + className}>{children}</div>;
};

export default Wrapper;
