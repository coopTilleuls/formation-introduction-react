import styles from './BookCard.module.css'
import {Link} from 'react-router-dom';
import {AddToWishlist} from '../Wishlist/AddToWishlist';
import {BookCover} from '../Elements/BookCover';
import {getBookId} from '../../utils/book';

export const BookCard = ({book}) => (
  <Link to={`/livres/${getBookId(book)}`} className={styles.card}>
          <BookCover id={getBookId(book)} />
          <h3>{book.title}</h3>
          <p>Auteur⋅rice : {book.author}</p>
          <p className={styles.grow}>Isbn : {getBookId(book)}</p>

          <AddToWishlist id={getBookId(book)} className={styles.wishlist}/>
  </Link>
);
