import { useContext, useMemo, useState } from 'react';
import { CardBooks } from './components/CardBooks';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { ReadingList } from './components/ReadingList';
import { BooksContext } from './context/BooksContext';

export const Books = () => {
  const { books, selectGenre, selectRange, querySearch } =
    useContext(BooksContext);
  const [readingBooks, setReadingBooks] = useState([]);

  const selectedBooks = useMemo(() => {
    return books.filter((book) => {
      if (
        book.book.title.toLowerCase().includes(querySearch.toLowerCase()) &&
        selectRange >= book.book.pages &&
        (selectGenre === '' || book.book.genre === selectGenre)
      )
        return true;
      return false;
    });
  }, [books, querySearch, selectGenre, selectRange]);

  const handleClickWish = (book) => {
    const bookExists = readingBooks.some(
      (readingBook) => readingBook.book.ISBN === book.book.ISBN
    );

    if (bookExists) {
      setReadingBooks(
        readingBooks.filter(
          (readingBook) => readingBook.book.ISBN !== book.book.ISBN
        )
      );
    } else {
      setReadingBooks([...readingBooks, book]);
    }
  };

  const availableBooks = selectedBooks.filter(
    (selectedBook) =>
      !readingBooks.some(
        (readingBook) => readingBook.book.ISBN === selectedBook.book.ISBN
      )
  );

  const numberBooks = {
    numberAvailableBooks: availableBooks.length,
    numberReadingBooks: readingBooks.length,
  };

  return (
    <>
      <div className='grid place-content-center p-12'>
        <Header numberBooks={numberBooks} />
        <Navbar />
        <main className='grid grid-cols-3 gap-4'>
          <section className='col-span-2 flex justify-center items-center gap-8 flex-wrap py-8'>
            {availableBooks.map((book) => (
              <CardBooks
                key={book.book.ISBN}
                {...book}
                handleClickWish={() => handleClickWish(book)}
                toggleWish={false}
              />
            ))}
          </section>
          <section className='col-span-1 p-8'>
            <h2 className='font-bold text-3xl text-center pb-8'>
              Lista de lectura
            </h2>
            <ReadingList
              readingBooks={readingBooks}
              handleClickWish={handleClickWish}
            />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};
