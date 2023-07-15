import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import productsData from "../Data/ProdutcData";

const Orders = () => {
  const [query, setQuery] = useState("");

  console.log(query);

  return (
    <>
      <div className="p-8 lg:ml-64">
        <div className="mt-14 text-3xl font-bold">
          <h1>Orders</h1>
        </div>
        <div className="mt-20">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4  text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search Items..."
                required=""
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
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
        <div className="app-content-action flex items-center justify-between px-1 py-4"></div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                  Order
                </th>
                <th scope="col" className="px-6 py-3">
                  Sales
                </th>
                <th scope="col" className="px-6 py-3">
                  Paid
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {productsData
                .filter((items) => {
                  if (query === "") {
                    return items;
                  } else if (
                    items.name.toLowerCase().includes(query.toLowerCase())
                  ) {
                    return items;
                  }
                })
                .map((items, ind) => {
                  const { id, name, src, category, track, price, paid, sales } =
                    items;

                  return (
                    <tr
                      className="border-b bg-white  dark:border-gray-700 dark:bg-gray-800"
                      key={ind}
                    >
                      <th
                        scope="row"
                        className=" flex items-center gap-2 whitespace-nowrap px-6  py-2  font-bold text-gray-900 dark:text-white"
                      >
                        {name}
                      </th>
                      <td className="px-6">{category}</td>
                      <td className="px-6">
                        <div
                          className={`${
                            track === "Delivered"
                              ? "rounded bg-green-900 text-center font-bold text-white "
                              : "rounded bg-black text-center font-bold text-white"
                          } `}
                        >
                          {track}
                        </div>
                      </td>
                      <td className="px-6 ">{sales}</td>

                      <td className="px-6 ">
                        <span
                          className={`${
                            paid === "Not paid"
                              ? "text-ceter inline-block w-full rounded bg-red-200 text-center  font-bold text-red-800"
                              : "inline-block w-full rounded bg-green-200 text-center font-bold text-green-800"
                          } `}
                        >
                          {paid}
                        </span>
                      </td>
                      <td className="px-6 ">{price}</td>
                      <td className="flex items-center px-6 ">
                        <AiFillEye
                          size={25}
                          color="green"
                          className="cursor-pointer"
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Orders;
