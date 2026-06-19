import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getCart,
  updateCartItem,
  deleteCartItem
} from "../services/cartService";

function CartPage() {

  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {

    const data = await getCart();

    setCartItems(data);
  };

  const increaseQuantity = async (item) => {

    await updateCartItem(
      item.id,
      item.quantity + 1
    );

    loadCart();
  };

  const decreaseQuantity = async (item) => {

    if (item.quantity === 1) {
      return;
    }

    await updateCartItem(
      item.id,
      item.quantity - 1
    );

    loadCart();
  };

  const removeItem = async (id) => {

    await deleteCartItem(id);

    loadCart();
  };

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.lineTotal),
    0
  );

  return (
    <div style={{ padding: "20px" }}>

      <h1>Shopping Cart</h1>

      <button
        onClick={() => navigate("/books")}
      >
        Back To Books
      </button>

      <hr />

      {cartItems.length === 0 && (
        <h3>Cart is empty</h3>
      )}

      {cartItems.map(item => (

        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            marginBottom: "10px",
            padding: "10px"
          }}
        >

          <h3>{item.title}</h3>

          <p>
            Quantity: {item.quantity}
          </p>

          <p>
            Total: ${item.lineTotal}
          </p>

          <button
            onClick={() =>
              decreaseQuantity(item)
            }
          >
            -
          </button>

          <button
            onClick={() =>
              increaseQuantity(item)
            }
          >
            +
          </button>

          <button
            onClick={() =>
              removeItem(item.id)
            }
          >
            Remove
          </button>

        </div>
      ))}

      <hr />

      <h2>
        Grand Total: ${total}
      </h2>

      {cartItems.length > 0 && (

        <button
          onClick={() =>
            navigate("/checkout")
          }
        >
          Checkout
        </button>

      )}

    </div>
  );
}

export default CartPage;