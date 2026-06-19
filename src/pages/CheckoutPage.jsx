import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { checkout } from "../services/orderService";

function CheckoutPage() {

  const [order, setOrder] = useState(null);

  const navigate = useNavigate();

  const placeOrder = async () => {

    try {

      const response = await checkout();

      setOrder(response);

    } catch (error) {

      alert("Checkout failed");
    }
  };

  if (order) {

    return (
      <div style={{ padding: "20px" }}>

        <h1>Order Successfully Placed</h1>

        <h3>
          Order ID: {order.orderId}
        </h3>

        <h3>
          Total Amount: ${order.totalAmount}
        </h3>

        <button
          onClick={() => navigate("/books")}
        >
          Continue Shopping
        </button>

      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>

      <h1>Checkout</h1>

      <p>
        Click below to place your order.
      </p>

      <button
        onClick={placeOrder}
      >
        Place Order
      </button>

      <br />
      <br />

      <button
        onClick={() => navigate("/cart")}
      >
        Back To Cart
      </button>

    </div>
  );
}

export default CheckoutPage;