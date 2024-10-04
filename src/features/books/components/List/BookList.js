'use client';

import styles from './BookList.module.css';
import {BookCard} from './BookCard';
import {useState} from 'react';
import {Spinner} from '@/components/Elements';
import {getBookId} from '@/features/books/utils/book';
import {LoginButton} from '@/features/user/components/LoginButton';
import {useGetSWR} from '@/utils/api';

export const BookList = () => {
    const [orderDirection, setOrderDirection] = useState("ASC");

    const {isLoading, data} = useGetSWR('/books.jsonld', {'order[title]': orderDirection});

    const books = data ? data.members : [];

    if (isLoading) {
        return <p>chargement...</p>
    }

    return (
        <>
            <div className={styles.loginButton}>
                <LoginButton />
            </div>
            <header className={styles.header}>
                <h1> Livres</h1>
                <p className={styles.order}>
                    Trier par titre
                    <select onChange={(e) => setOrderDirection(e.target.value)}>
                        <option value="ASC">Ascendant</option>
                        <option value="DESC">Descendant</option>
                    </select>
                </p>
            </header>
            {isLoading ? (
                <Spinner/>
            ) : (
                <div className={styles.list}>
                    {books.map((book, index) => (
                        <BookCard key={`${getBookId(book)}-${index}`} book={book}/>
                    ))}
                </div>
            )}
        < />
    );
};
