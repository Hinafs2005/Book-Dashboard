import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      const response = await fetch(
        `https://openlibrary.org/works/${id}.json`
      );
      const data = await response.json();
      setBook(data);
    }

    fetchBook();
  }, [id]);

  if (!book) return <h2>Loading...</h2>;

  return (
    <div className="detail-page">

      <Link to="/" className="back-btn">
        ← Back to Dashboard
      </Link>

      <div className="detail-card">

        <div className="detail-cover">
          📚
        </div>

        <div className="detail-info">

          <h1>{book.title}</h1>

          <div className="detail-section">
            <h3>Description</h3>

            <p>
              {typeof book.description === "string"
                ? book.description
                : book.description?.value || "No description available."}
            </p>
          </div>

          <div className="detail-section">
            <h3>Subjects</h3>

            <div className="subjects">
              {book.subjects?.slice(0, 12).map((subject) => (
                <span key={subject} className="subject-tag">
                  {subject}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default BookDetail;