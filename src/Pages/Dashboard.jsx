import { BsCurrencyDollar } from "react-icons/bs";
import { BsFillBasket2Fill } from "react-icons/bs";
import { BiSolidShoppingBags } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import Sidebar from "../Component/Sidebar/Sidebar";
import productsData from "../Data/ProdutcData";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="p-8 sm:ml-64">
        <div className="mt-14 text-3xl font-bold">
          <h1>Dashboard</h1>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6">
          <div className="sales flex items-center justify-center rounded border bg-white py-5  shadow">
            <BsCurrencyDollar className="mr-4  text-3xl text-blue-800 " />
            <div className="sales-data">
              <h3>Total Sales</h3>
              <p className="price">$22,678</p>
            </div>
          </div>
          <div className="sales flex items-center justify-center rounded border bg-white shadow">
            <BsFillBasket2Fill className="bg- mr-4 text-3xl text-green-800" />
            <div className="sales-data ">
              <h3> Total Products</h3>
              <p className="price">70</p>
            </div>
          </div>
          <div className="sales flex items-center justify-center rounded border bg-white shadow">
            <BiSolidShoppingBags className="bg- mr-4  text-3xl text-yellow-400" />
            <div className="sales-data">
              <h3>Total Orders</h3>
              <p className="price">130</p>
            </div>
          </div>
        </div>
        <div className="recent-orders bg-white px-2 py-6">
          <div className="mb-5 flex items-center ">
            <h3 className=" text-xl font-bold">Select Status:</h3>
            <select className=" ml-[5rem]">
              <option value="status">Select-Status</option>
              <option value="processing">Processing</option>
              <option value="shipping">Shipping</option>
              <option value="delieverd">Delieverd</option>
              <option value="cancel">Cancel</option>
            </select>
          </div>

          <div className="recent-orders-container">
            <div className="mb-5 flex items-center justify-between">
              <h4>Recent Orders</h4>
              <select name="show" className=" py-0">
                <option value="show">Show</option>
                <option value="10">10</option>
                <option value="10">20</option>
                <option value="10">30</option>
              </select>
            </div>

            <div className={`relative overflow-x-auto shadow-md sm:rounded-lg`}>
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
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productsData.map((items, i) => {
                    const { name, src, category, status, price, stock, sales } =
                      items;
                    return (
                      <tr
                        className="border-b bg-white  dark:border-gray-700 dark:bg-gray-800"
                        key={i}
                      >
                        <th
                          scope="row"
                          className="flex items-center gap-2 whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                        >
                          <div className="h-[50px] w-[50px]">
                            <img
                              src={src}
                              className="h-full w-full object-cover object-center mix-blend-multiply	contrast-100"
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
                          <AiFillEye size={25} color="green" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
