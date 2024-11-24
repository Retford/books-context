export const Header = ({ numberBooks }) => {
  const { numberAvailableBooks, numberReadingBooks } = numberBooks;
  return (
    <header>
      <h2 className='font-bold text-3xl'>
        {numberAvailableBooks} libros disponibles
      </h2>
      <h4 className='font-light text-xl'>
        {numberReadingBooks} en la lista de lectura
      </h4>
    </header>
  );
};
