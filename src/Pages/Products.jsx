import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../Context/ProductContext";
import { MdGridView } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { BsDot } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import { UpdateProductContext } from "../Context/UpdateProductContext";

const Products = () => {
  const [gridViewToggle, setGridViewToggle] = useState(false);
  const [listViewToggle, setlistViewToggle] = useState(true);
  const { productsData, setProductsData } = useContext(ProductContext);
  const { updateFormData, setUpdateFormData } =
    useContext(UpdateProductContext);

  console.log(updateFormData);

  const navigate = useNavigate();

  const editProduct = (i) => {
    navigate("/update-product");
    console.log(i);

    const newEdit = productsData.find((item) => {
      return item.id === i;
    });

    console.log(i);
    console.log(newEdit);

    setUpdateFormData({ ...updateFormData, ...newEdit });
  };

  // _--------------------------------------------*-----------------------------------

  const deleteItem = (id) => {
    const deleteItem = productsData.filter((items, ind) => {
      return ind !== id;
    });
    setProductsData(deleteItem);
  };

  useEffect(() => {
    localStorage.setItem("productsData", JSON.stringify(productsData));
  }, [productsData]);

  return (
    <>
      <div className="p-8 sm:ml-64">
        <div className="mt-14 text-3xl font-bold">
          <h1>Products</h1>
        </div>
        <div className="mt-20">
          <button
            type="button"
            className="mb-2 mr-2 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            onClick={() => navigate("/add-product")}
          >
            Add Item
          </button>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4  text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search Items..."
                required=""
              />
              <button
                type="submit"
                className="absolute bottom-2.5 right-2.5 rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="app-content-action flex items-center justify-between px-1 py-4">
          <div className="ml-auto flex items-center">
            <CiViewList
              size={25}
              onClick={() => {
                setlistViewToggle(true);
                setGridViewToggle(false);
              }}
              className="cursor-pointer"
            />
            <MdGridView
              size={25}
              onClick={() => {
                setGridViewToggle(true);
                setlistViewToggle(false);
              }}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/*  // List View Product Data */}
        {productsData.length < 1 && <div>No Items are added yet</div>}
        {productsData.length > 0 && (
          <div
            className={`${
              listViewToggle === false ? "hidden" : ""
            } relative overflow-x-auto shadow-md sm:rounded-lg`}
          >
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Items
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sales
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Stock
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {productsData.map((items, ind) => {
                  const {
                    id,
                    name,
                    src,
                    category,
                    status,
                    price,
                    stock,
                    sales,
                  } = items;

                  return (
                    <tr
                      className="border-b bg-white  dark:border-gray-700 dark:bg-gray-800"
                      key={ind}
                    >
                      <th
                        scope="row"
                        className="flex items-center gap-2 whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        <div className="h-[30px] w-[50px]">
                          <img
                            src={src}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        {name}
                      </th>
                      <td className="px-6 py-4">{category}</td>
                      <td className="px-6 py-4">{status}</td>
                      <td className="px-6 py-4">{sales}</td>
                      <td className="px-6 py-4">{stock}</td>
                      <td className="px-6 py-4">{price}</td>
                      <td className="flex items-center px-6 py-4">
                        <AiFillEye
                          size={25}
                          color="green"
                          className="cursor-pointer"
                        />
                        <BiEdit
                          size={25}
                          onClick={() => editProduct(id)}
                          className="cursor-pointer"
                        />
                        <RiDeleteBin6Line
                          size={25}
                          className="cursor-pointer"
                          onClick={() => deleteItem(ind)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* // Grid View Product Data */}
        <div
          className={`${
            gridViewToggle === false ? "hidden" : ""
          } grid gap-4 max-sm:grid-cols-2 max-[375px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-4`}
        >
          {productsData.map((product, ind) => {
            const { id, name, src, category, status, sales, stock, price } =
              product;
            return (
              <div
                className="max-w-sm cursor-pointer  rounded-lg border border-gray-200 bg-[#f3f6fd] shadow transition-all duration-500 hover:scale-105 dark:border-gray-700 dark:bg-gray-800"
                key={ind}
                onClick={() => navigate("/view-item")}
              >
                <div className="relative h-[10rem] w-full">
                  <img
                    src={src}
                    className="h-full w-full rounded-t-lg object-cover  object-center"
                  />
                  <RiDeleteBin6Line
                    size={25}
                    className="absolute right-0 top-2 text-slate-600"
                    onClick={() => deleteItem(id)}
                  />
                </div>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                  </h5>

                  <div className="about-product-content">
                    <div className="category flex items-center justify-between">
                      <p className="font-bold	 text-slate-500">Category:</p>
                      <span>{category}</span>
                    </div>
                    <div className="category flex items-center justify-between">
                      <p className="font-bold	 text-slate-500">Status:</p>
                      <span
                        className={`${
                          status === "Active"
                            ? "flex w-16 items-center rounded bg-green-200 text-center text-[#2ba972]"
                            : "w-18 flex items-center rounded bg-slate-200 text-center text-[#59719d]"
                        }`}
                      >
                        <BsDot size={15} />
                        {status}
                      </span>
                    </div>
                    <div className="category flex items-center justify-between">
                      <p className="font-bold	 text-slate-500">Sales:</p>
                      <span>{sales}</span>
                    </div>
                    <div className="category flex items-center justify-between">
                      <p className="font-bold	 text-slate-500">Stock:</p>
                      <span>{stock}</span>
                    </div>
                    <div className="category flex items-center justify-between">
                      <p className="font-bold	 text-slate-500">Price:</p>
                      <span>{price}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
