import { store } from 'context/PageContext';
import { useCallback, useContext, useState } from 'react';

const usePagination = (data: any[], size = 5) => {
  const { state, dispatch } = useContext(store);
  const [page, setPage] = useState(state.page);

  const pages = Math.ceil(data.length / size);
  const index = page * size;

  const select = useCallback(
    (value: number) => {
      dispatch(value);
      setPage(value);
    },
    [dispatch],
  );

  return { page, select, pages, index, size };
};

export default usePagination;
