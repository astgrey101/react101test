import React, { memo, useMemo } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { SORT } from '../../../../../types/types';
import './sortButton.css';

interface ISortButtonProps {
    order: SORT;
    updateOrder: () => void;
}

const SortButton = ({ order, updateOrder }: ISortButtonProps): JSX.Element => {
  const orderBy = useMemo(
    () => (order === SORT.asc ? (<FaArrowUp />) : (<FaArrowDown />)),
    [order],
  );
  return (
    <button type="button" onClick={updateOrder} className="button">
      Sort by Creation date
      {' '}
      { orderBy }
    </button>
  );
};

export default memo(SortButton);
