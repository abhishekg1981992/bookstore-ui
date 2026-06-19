import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getBooks } from "../services/bookService";
import api from "../services/api";

function BooksPage() {

  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  const addToCart = async (bookId) => {

    try {

      await api.post("/api/cart/items", {
        bookId,
        quantity: 1
      });

      alert("Book added to cart");

    } catch (error) {

      alert("Failed to add to cart");
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Books</h1>

      <button onClick={() => navigate("/cart")}>
        View Cart
      </button>

      <hr />

      {books.map(book => (

        <div
          key={book.id}
          style={{
            border: "1px solid gray",
            marginBottom: "10px",
            padding: "10px"
          }}
        >

          <h3>{book.title}</h3>

          <p>Author: {book.author}</p>

          <p>Price: ${book.price}</p>

          <button
            onClick={() => addToCart(book.id)}
          >
            Add To Cart
          </button>

        </div>

      ))}

    </div>
  );
}

export default BooksPage;