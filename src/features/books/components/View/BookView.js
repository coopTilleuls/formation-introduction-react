'use client';

import styles from './BookView.module.css';
import {AddToWishlist} from '@/features/books';
import {BookCover} from '@/features/books/components/Elements/BookCover';
import {BookReviews} from './BookReviews';
import {useState} from 'react';
import {AddReview} from './AddReview';
import {getBookId} from '@/features/books/utils/book';
import {LoginButton} from '@/features/user/components/LoginButton';
import Link from 'next/link';
import {useParams, useSearchParams} from 'next/navigation';
import {useGetSWR} from '@/utils/api';

export const BookView = () => {
  const {id} = useParams();
  const {isLoading , data: book} = useGetSWR(`/books/${id}.jsonld`);

  const [currentSheet, setCurrentSheet] = useState('list')

  if (isLoading) {
    return <p>Chargement...</p>
  }

  return (
    <div>
      <div className={styles.loginButton}>
        <LoginButton/>
      </div>
      <p><Link href="/livres" className={styles.back}>&lt; retour aux livres</Link></p>
      <header className={styles.header}>
        <h1>{book.title}</h1>
        <AddToWishlist id={getBookId(book)}/>
      </header>

      <div className={styles.info}>
        <BookCover id={getBookId(book)}/>
        <div className={styles.meta}>
          <p><strong>Auteur⋅rice :</strong> {book.author}</p>
          <p><strong>Isbn :</strong> {getBookId(book)}</p>
          <p className={styles.description}>{book.description}</p>
        </div>
      </div>
      <div className={styles['comment-sheets']}>
        <ul className={styles['sheet-list']}>
          <li onClick={() => setCurrentSheet('list')}
              className={currentSheet === 'list' ? styles['current-sheet'] : undefined}>Commentaires
          </li>
          <li onClick={() => setCurrentSheet('add')}
              className={currentSheet === 'add' ? styles['current-sheet'] : undefined}>Ajouter un commentaire
          </li>
        </ul>
        <div className={styles['sheet-view']}>
          {currentSheet === 'add' ? <AddReview/> : <BookReviews/>}
        </div>
      </div>
    </div>
  );
}
