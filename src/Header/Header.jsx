import { RiMenu2Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div className="container mx-auto  flex justify-between">
      <div className="navbar bg-pink-200">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RiMenu2Fill className="h-5 w-5"></RiMenu2Fill>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow text-xl font-semibold space-x-2 text-center "
            >
 
              <NavLink to={"/home"}>Home</NavLink>
              <NavLink to={"/service"}> Services</NavLink>
              <NavLink to={"/contact"}> Contact</NavLink>
              <NavLink to={"/blogs"}> Blogs</NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">Rezaul</a>
        </div>
        <div className="navbar hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-semibold space-x-8 text-center">
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/service"}> Services</NavLink>
            <NavLink to={"/contact"}> Contact</NavLink>
            <NavLink to={"/blogs"}> Blogs</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center md:space-x-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  title="Search"
                  className="p-1 focus:outline-none focus:ring">
                  <CiSearch className="w-4 h-4 dark:text-gray-800"></CiSearch>
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50"
              />
            </div>
            <button
              type="button"
              className=" w-24 py-2.5 px-4 bg rounded lg:block dark:bg-violet-600 dark:text-gray-50 font-bold text-xl">
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
