import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import ProductProvider from "./Context/ProductContext.jsx";
import UpdateProductProvider from "./Context/UpdateProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UpdateProductProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </UpdateProductProvider>
  </React.StrictMode>
);
