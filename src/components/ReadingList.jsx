import { CardBooks } from './CardBooks';

export const ReadingList = ({ readingBooks, handleClickWish }) => {
  return (
    <section className='overflow-x-hidden h-screen overflow-scroll flex justify-center items-center gap-8 flex-wrap'>
      {readingBooks.map((book) => (
        <CardBooks
          key={book.book.ISBN}
          {...book}
          handleClickWish={() => handleClickWish(book)}
          toggleWish={true}
        />
      ))}
    </section>
  );
};
