import React, { memo, useCallback } from 'react';
import { SORT } from '../../../../types/types';
import './appBar.css';
import SortButton from './sortButton';

interface IAppBarProps {
    order: SORT;
    setOrder: (order: SORT) => void;
}

const AppBar = ({ order, setOrder }: IAppBarProps): JSX.Element => {
  const updateOrder = useCallback(() => {
    setOrder(order === SORT.asc ? SORT.desc : SORT.asc);
  }, [order]);

  return (
    <div className="appBar">
      <SortButton order={order} updateOrder={updateOrder} />
    </div>
  );
};

export default memo(AppBar);
