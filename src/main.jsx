import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Cart from "./cart.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <h1>Your Cart</h1>
    <Cart
      product={{
        id: 1,
        name: "Pineapple",
        price: 250,
        thumbnail:
          "https://res.cloudinary.com/dbfn5lnvx/image/upload/v1726640668/react-tutorial/superm-v2/pineapple.jpg",
      }}
    />
    <Cart
      product={{
        id: 2,
        name: "banana",
        price: 150,
        thumbnail:
          "https://res.cloudinary.com/dbfn5lnvx/image/upload/v1726640668/react-tutorial/superm-v2/banana.jpg",
      }}
    />
  </StrictMode>
);
