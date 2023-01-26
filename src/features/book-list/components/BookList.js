import './BookList.css';
import {BookCard} from './BookCard';
import {useEffect, useState} from 'react';
import {Spinner} from '../../../components/Elements';

const availableOrders = {isbn: 'Isbn', title: 'Titre', author: 'Auteur⋅rice'}

export const BookList = () => {
    const [isLoading, setIsloading] = useState(true);
    const [books, setBooks] = useState([]);
    const [order, setOrder] = useState("id");
    const [orderDirection, setOrderDirection] = useState("ASC");

    useEffect(() => {
        (async () => {
            setIsloading(true);

            const requestURL = new URL('https://demo.api-platform.com/books.jsonld');
            if (order !== "") {
                requestURL.searchParams.set(`order[${order}]`, orderDirection);
            }
            const response = await fetch(requestURL.toString());

            if (response.ok) {
                const bookCollection = await response.json();
                setBooks(bookCollection['hydra:member']);
            }

            setIsloading(false);
        })();
    }, [order, orderDirection])

    return (
        <>
            <header className="book-list-header">
                <h1> Livres</h1>
                <p className="book-list-order">
                    Trier par
                    <select onChange={(e) => setOrder(e.target.value)}>
                        <option value="id">Date d'ajout</option>
                        {Object.entries(availableOrders).map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                    <select onChange={(e) => setOrderDirection(e.target.value)}>
                        <option value="ASC">Ascendant</option>
                        <option value="DESC">Descendant</option>
                    </select>
                </p>
            </header>
            {isLoading ? (
                <Spinner/>
            ) : (
                <div className="book-list">
                    {books.map((book, index) => (
                        <BookCard key={`${book.isbn}-${index}`} book={book}/>
                    ))}
                </div>
            )}
        < />
    );
};
