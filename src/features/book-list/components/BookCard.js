import './BookCard.css'
import {useUserContext} from '../../../contexts';
import {getBookId} from '../utils/book';

export const BookCard = ({book}) => {
    const {wishlist, toggleInWishlist} = useUserContext();
    const isInWishlist = wishlist.includes(book['@id']);

    return (
        <div className="book-card">
            <img src={`https://picsum.photos/seed/${getBookId(book)}/300/400`} width="100%" alt=""/>
            <h3>{book.title}</h3>
            <p>Auteur⋅rice : {book.author}</p>
            <p className="book-card-isbn">Isbn : {getBookId(book)}</p>

            <button
                className={`wishlist ${isInWishlist ? 'already-in' : ''}`}
                onClick={() => toggleInWishlist(book['@id'])}
            >
                <span className="icon">❤</span>
                {isInWishlist ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            </button>
        </div>
    );
}
