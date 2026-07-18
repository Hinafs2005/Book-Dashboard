import { Link } from "react-router-dom";

function BookCard({ book }) {
  const cover = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "";

  // Use the Open Library work key if available
  const bookId = book.key
    ? book.key.replace("/works/", "")
    : book.cover_i;

  return (
    <Link
      to={`/book/${bookId}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="book-card">
        {cover ? (
          <img src={cover} alt={book.title} />
        ) : (
          <div className="no-cover">
            📚
            <p>No Cover Available</p>
          </div>
        )}

        <div className="book-info">
          <h2>{book.title}</h2>

          <p className="author">
            👤 {book.author_name ? book.author_name[0] : "Unknown Author"}
          </p>

          <p className="year">
            📅 {book.first_publish_year || "Unknown"}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BookCard;