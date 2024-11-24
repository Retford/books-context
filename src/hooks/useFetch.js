import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [books, setBooks] = useState([]);

  const getFetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const { library } = data;
    setBooks(library);
  };
  useEffect(() => {
    getFetchData();
  }, [url]);

  return books;
};
