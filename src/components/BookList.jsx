import BookCard from "./BookCard";

function BookList({ books }) {
return (
    <div>
    {books.slice(0, 10).map((book) => (
        <BookCard key={book.key} book={book} />
    ))}
        <div
            className="book-grid">
        </div>
    </div>
);
}

export default BookList;