import { useContext } from 'react';
import { BooksContext } from '../context/BooksContext';

export const Navbar = () => {
  const {
    books,
    setSelectGenre,
    setSelectRange,
    selectRange,
    querySearch,
    setQuerySearch,
  } = useContext(BooksContext);

  const genres = Array.from(new Set(books.map((book) => book.book.genre)));

  const handleChange = (event) => {
    setSelectGenre(event.target.value);
  };

  const handleChangeRange = (event) => {
    setSelectRange(event.target.value);
  };

  const handleQuerySearch = (event) => {
    setQuerySearch(event.target.value);
    console.log(event.target.value);
  };

  const numberPages = books.map((book) => book.book.pages);
  const minNumberPages = Math.min(...numberPages);
  const maxNumberPages = Math.max(...numberPages);

  return (
    <nav className='my-8'>
      <ul className='flex justify-center items-center flex-wrap gap-12'>
        <li className='flex gap-8 justify-center w-full'>
          <label className='font-light text-xl'>Búsqueda</label>
          <input
            type='text'
            placeholder='Escriba el título del libro...'
            className='outline-none'
            onChange={handleQuerySearch}
            value={querySearch}
          />
        </li>
        <li className='flex gap-8 justify-center'>
          <label className='font-light text-xl'>Filtrar por páginas</label>
          <input
            type='range'
            name='range'
            min={minNumberPages}
            max={maxNumberPages}
            onChange={handleChangeRange}
            value={selectRange}
          />
          <div>
            <input
              className='w-14 outline-none'
              type='number'
              onChange={handleChangeRange}
              value={selectRange}
            />
            <span>páginas</span>
          </div>
        </li>
        <li className='flex gap-8 justify-center'>
          <label className='font-light text-xl'>Filtrar por género</label>
          <select onChange={handleChange} className='outline-none'>
            <option value=''>Todos</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </li>
      </ul>
    </nav>
  );
};
