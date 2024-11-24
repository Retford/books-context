import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { BooksContext } from './BooksContext';

// eslint-disable-next-line react/prop-types
export const BooksProvider = ({ children }) => {
  const [selectGenre, setSelectGenre] = useState('');
  const [selectRange, setSelectRange] = useState(1200);
  const [querySearch, setQuerySearch] = useState('');

  const books = useFetch('/data/books.json');

  return (
    <BooksContext.Provider
      value={{
        books,
        selectGenre,
        setSelectGenre,
        selectRange,
        setSelectRange,
        querySearch,
        setQuerySearch,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
