import styles from './BookList.module.css';
import {BookCard} from './BookCard';
import {useEffect, useState} from 'react';
import {Spinner} from '../../../../components/Elements';
import {getBookId} from '../../utils/book';

export const BookList = () => {
    const [isLoading, setIsloading] = useState(true);
    const [books, setBooks] = useState([]);
    const [orderDirection, setOrderDirection] = useState("ASC");

    useEffect(() => {
        (async () => {
            setIsloading(true);

            const requestURL = new URL('https://demo.api-platform.com/books.jsonld');
            requestURL.searchParams.set('order[title]', orderDirection);
            const response = await fetch(requestURL.toString());

            if (response.ok) {
                const bookCollection = await response.json();
                setBooks(bookCollection['hydra:member']);
            }

            setIsloading(false);
        })();
    }, [orderDirection])

    return (
        <>
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
