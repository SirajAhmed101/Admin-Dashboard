import { BiSolidDashboard } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { BiSolidShoppingBags } from "react-icons/bi";
import { BsFillBagPlusFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

const SidebarData = [
  {
    list: "Dashboard",
    icon: (
      <BiSolidDashboard className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
    ),
    path: "/",
  },
  {
    list: "Product",
    icon: (
      <BsFillBagFill className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
    ),
    path: "/product",
  },
  {
    list: "Add Product",
    icon: (
      <BsFillBagPlusFill className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
    ),
    path: "/add-product",
  },

  {
    list: "Categories",
    icon: (
      <BiCategory className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
    ),
    path: "/categories",
  },
  {
    list: "Orders",
    icon: (
      <BiSolidShoppingBags className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
    ),
    path: "/orders",
  },
];

export default SidebarData;
