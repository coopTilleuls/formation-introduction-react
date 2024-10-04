import styles from './BookCard.module.css'
import {AddToWishlist} from '@/features/books';
import {BookCover} from '@/features/books/components/Elements/BookCover';
import {getBookId} from '@/features/books/utils/book';
import Link from 'next/link';

export const BookCard = ({book}) => (
  <Link href={`/livres/${getBookId(book)}`} className={styles.card}>
          <BookCover id={getBookId(book)} />
          <h3>{book.title}</h3>
          <p>Auteur⋅rice : {book.author}</p>
          <p className={styles.grow}>Isbn : {getBookId(book)}</p>

          <AddToWishlist id={getBookId(book)} className={styles.wishlist}/>
  </Link>
);
