function BookCard({ book }) {
  const cover = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "";

  return (
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
  );
}

export default BookCard;