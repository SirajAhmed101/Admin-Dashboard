import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const getDataFromLs = () => {
    const productsData = localStorage.getItem("productsData");

    if (productsData) {
      return JSON.parse(productsData);
    } else {
      return [];
    }
  };

  const [productsData, setProductsData] = useState(getDataFromLs());

  const value = { productsData, setProductsData };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
