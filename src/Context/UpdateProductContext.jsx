import { createContext, useState } from "react";

export const UpdateProductContext = createContext(null);

const UpdateProductProvider = ({ children }) => {
  const [updateFormData, setUpdateFormData] = useState({
    id: "",
    name: "",
    sales: "",
    price: "",
    category: "",
    stock: "",
    description: "",
    src: "",
    file: "",
    status: "",
  });

  const value = { updateFormData, setUpdateFormData };

  return (
    <UpdateProductContext.Provider value={value}>
      {children}
    </UpdateProductContext.Provider>
  );
};

export default UpdateProductProvider;
