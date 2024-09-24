import styles from './BookView.module.css';
import {Link, useLoaderData} from 'react-router-dom';
import {AddToWishlist} from '../Wishlist/AddToWishlist';
import {BookCover} from '../Elements/BookCover';
import {BookReviews} from './BookReviews';
import {useState} from 'react';
import {AddReview} from './AddReview';
import {getBookId} from '../../utils/book';

export const BookView = () => {
    const {book} = JSON.parse(useLoaderData());
    const [currentSheet, setCurrentSheet] = useState('list')

    return (
        <div>
            <p><Link to="/livres" className={styles.back}>&lt; retour aux livres</Link></p>
            <header className={styles.header}>
                <h1>{book.title}</h1>
                <AddToWishlist id={getBookId(book)} />
            </header>

            <div className={styles.info}>
                <BookCover id={getBookId(book)} />
                <div className={styles.meta}>
                    <p><strong>Auteur⋅rice :</strong> {book.author}</p>
                    <p><strong>Isbn :</strong> {getBookId(book)}</p>
                    <p className={styles.description}>{book.description}</p>
                </div>
            </div>
            <div className={styles['comment-sheets']}>
                <ul className={styles['sheet-list']}>
                    <li onClick={() => setCurrentSheet('list')} className={currentSheet === 'list' ? styles['current-sheet'] : undefined}>Commentaires</li>
                    <li onClick={() => setCurrentSheet('add')} className={currentSheet === 'add' ? styles['current-sheet'] : undefined}>Ajouter un commentaire</li>
                </ul>
                <div className={styles['sheet-view']}>
                    {currentSheet === 'add' ? <AddReview /> : <BookReviews />}
                </div>
            </div>
        </div>
    );
}
