function SummaryCards({ books }) {
const totalBooks = books.length;

const uniqueAuthors = new Set();

books.forEach((book) => {
    if (book.author_name) {
    uniqueAuthors.add(book.author_name[0]);
    }
});

const years = books
    .map((book) => book.first_publish_year)
    .filter(Boolean);

const averageYear =
    years.length > 0
    ? Math.round(
    years.reduce((a, b) => a + b, 0) / years.length
        )
    : 0;

return (
    <div className="summary">
    <div className="card">
        <h3>📚 Total Books</h3>
        <p>{totalBooks}</p>
        <span>Books Found</span>
    </div>

    <div className="card">
        <h3>👤 Authors</h3>
        <p>{uniqueAuthors.size}</p>
        <span>Unique Authors</span>
    </div>

    <div className="card">
        <h3>📅 Avg Year</h3>
        <p>{averageYear}</p>
        <span>Average Publication</span>
    </div>
    </div>
);
}

export default SummaryCards;