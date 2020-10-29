import React, { createContext, useReducer } from 'react';

const initialState: any = { page: 1 };
const store = createContext(initialState);

const PageProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer((_state, page) => {
    return { page };
  }, initialState);

  return (
    <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
  );
};

export { store, PageProvider };
