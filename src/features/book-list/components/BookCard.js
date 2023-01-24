import './BookCard.css'

export const BookCard = ({book}) => (
    <div className="book-card">
        <img src={`https://picsum.photos/seed/${book.isbn}/300/400`} width="100%" alt="" />
        <h3>{book.title}</h3>
        <p>Auteur⋅rice : {book.author}</p>
        <p>Isbn : {book.isbn}</p>
    </div>
);
