import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Books } from './Books.jsx';
import { BooksProvider } from './context/BooksProvider.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BooksProvider>
      <Books />
    </BooksProvider>
  </StrictMode>
);
