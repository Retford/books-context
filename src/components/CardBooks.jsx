/* eslint-disable react/prop-types */
import { VscNotebook } from 'react-icons/vsc';
import { BsStar, BsStarFill } from 'react-icons/bs';

export const CardBooks = ({ book, handleClickWish, toggleWish }) => {
  return (
    <article
      className='rounded-[20px] w-80 h-[600px]
      flex justify-between items-start flex-col shadow-inset-black bg-white text-black shadow-lg shadow-white'
    >
      <div className='relative'>
        <img
          src={book.cover}
          alt={book.title}
          className='w-80 h-[400px] object-cover rounded-t-[20px]'
        />
        <div
          className='absolute top-4 right-4 p-1 bg-black rounded-full cursor-pointer'
          onClick={handleClickWish}
        >
          {toggleWish ? (
            <BsStarFill fontSize='30px' color='yellow' />
          ) : (
            <BsStar fontSize='30px' color='yellow' />
          )}
        </div>
      </div>

      <div className='w-full bg-[#F4F4F4] flex justify-between p-4'>
        <div className='flex items-center gap-2'>
          <VscNotebook fontSize='24px' />
          <span className='text-xl font-black'>
            {book.pages} <span className='font-extralight'>páginas</span>
          </span>
        </div>
        <span className='bg-black text-white px-2 rounded-lg'>
          {book.genre}
        </span>
      </div>
      <div className='p-4'>
        <p className='text-base text-[#78858F]'>{book.author.name}</p>
        <h3 className='font-bold text-2xl line-clamp-1 text-ellipsis'>
          {book.title}
        </h3>
        <p className='text-base line-clamp-2 text-ellipsis'>{book.synopsis}</p>
      </div>
    </article>
  );
};
