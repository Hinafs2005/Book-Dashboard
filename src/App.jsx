import { useEffect, useState } from "react";
import SummaryCards from "./components/SummaryCards";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("All");

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch(
        "https://openlibrary.org/search.json?q=fiction&limit=50"
      );

      const data = await response.json();
      setBooks(data.docs);
    }

    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) => {
    const matchesSearch = (book.title || "")
      .toLowerCase()
      .includes(search.toLowerCase());

    const year = book.first_publish_year || 0;

    let matchesYear = true;

    if (yearFilter === "Before 1950") {
      matchesYear = year < 1950;
    } else if (yearFilter === "1950-1999") {
      matchesYear = year >= 1950 && year <= 1999;
    } else if (yearFilter === "2000+") {
      matchesYear = year >= 2000;
    }

    return matchesSearch && matchesYear;
  });

  return (
    <div className="App">
      <div className="hero">

      <div className="hero-text">

      <h1>📚 Book Explorer</h1>

      <p>
          Browse timeless fiction, discover new authors, and explore one of the world's largest digital libraries.
      </p>

      </div>

      </div>

      <SummaryCards books={books} />

      <div className="controls">
        <SearchBar search={search} setSearch={setSearch} />

        <Filter
          yearFilter={yearFilter}
          setYearFilter={setYearFilter}
        />
      </div>

      <BookList books={filteredBooks} />
    </div>
  );
}

export default App;