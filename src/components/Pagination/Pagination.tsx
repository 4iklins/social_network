import { ChangeEvent, DetailedHTMLProps, HtmlHTMLAttributes, useState } from 'react';
import style from './pagination.module.css';
import Button from '../Button/Button';
import { ItemsPerPageType } from '../../redux/users-reducer';

interface PaginationProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  total: number;
  current: number;
  itemsCount: ItemsPerPageType;

  setCurrentPage: (page: number) => void;
  setItemsPerPage: (count: ItemsPerPageType) => void;
}

const option: ItemsPerPageType[] = ['10', '20', '50', '100'];
const firstPage = 1;
const buttonsCount: number = 7;
const layoutMaxCurrentPage: number = 4;

const Pagination = (props: PaginationProps) => {
  const { total, current, itemsCount, className, setCurrentPage, setItemsPerPage } = props;

  const changeItemsCount = (evt: ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(evt.currentTarget.value as ItemsPerPageType);
  };
  const getPagesCount = (totalCount: number): number => Math.ceil(totalCount / +itemsCount);

  const getButtonLayout = (pages: number) => {
    let buttons: (string | number)[] = [];
    if (pages <= buttonsCount) {
      for (let i = firstPage; i <= pages; i++) {
        buttons.push(i);
      }
    } else if (pages > buttonsCount && current < layoutMaxCurrentPage) {
      for (let i = firstPage; i <= buttonsCount; i++) {
        buttonsCount === i ? buttons.push(pages) : i === buttonsCount - 1 ? buttons.push('...') : buttons.push(i);
      }
    } else if (
      pages > buttonsCount &&
      current >= layoutMaxCurrentPage &&
      pages - current >= layoutMaxCurrentPage - firstPage
    ) {
      for (let i = firstPage; i <= buttonsCount; i++) {
        buttonsCount === i
          ? buttons.push(pages)
          : i === buttonsCount - 1 || i === firstPage + 1
          ? buttons.push('...')
          : i !== firstPage
          ? buttons.push(current - layoutMaxCurrentPage + i)
          : buttons.push(i);
      }
    } else if (pages > buttonsCount && pages - current < layoutMaxCurrentPage - firstPage) {
      for (let i = firstPage; i <= buttonsCount; i++) {
        firstPage === i
          ? buttons.push(firstPage)
          : i === firstPage + 1
          ? buttons.push('...')
          : buttons.push(pages - (buttonsCount - i));
      }
    }
    return buttons.map((page, i) =>
      typeof page === 'number' ? (
        <Button
          size='small'
          color={page === current ? 'primary' : 'secondary'}
          key={i}
          onClick={() => setCurrentPage(page)}>
          {page}
        </Button>
      ) : (
        <span className={style.dots} key={i}>
          {page}
        </span>
      )
    );
  };

  const getButtons = () => {
    const pages = getPagesCount(total);

    return (
      <div className={style.buttons}>
        <Button
          disabled={current === firstPage}
          size='small'
          color={'secondary'}
          onClick={() => setCurrentPage(current - 1)}>
          {'<'}
        </Button>
        {getButtonLayout(pages)}
        <Button
          disabled={current === pages}
          size='small'
          color={'secondary'}
          onClick={() => setCurrentPage(current + 1)}>
          {'>'}
        </Button>
      </div>
    );
  };

  return (
    <div className={style.pagination + ' ' + className}>
      {getButtons()}
      <label>
        Users on page:
        <select onChange={changeItemsCount} value={itemsCount} className={style.select}>
          {option.map(item => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Pagination;
