import { store } from 'context/PageContext';
import { useCallback, useContext, useState } from 'react';

export default (data: any[], size = 5) => {
  const { state, dispatch } = useContext(store);
  const [page, setPage] = useState(state.page);

  const lastPage = Math.ceil(data.length / size) - 1;
  const isLast = page === lastPage;
  const index = page * size + size;

  const next = useCallback(() => {
    dispatch(page + 1);
    setPage(page + 1);
  }, [page, dispatch]);

  return { page, next, isLast, index };
};
