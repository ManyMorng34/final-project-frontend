"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import LogoutComponent from "./LogoutComponent";
import CreateProduct from "./CreateProduct"; // Import the CreateProduct component

const Sidebar = () => {
  const [isCreateProductOpen, setIsCreateProductOpen] = useState(false);
  const [isLogoutPopupVisible, setIsLogoutPopupVisible] = useState(false);
  const pathname = usePathname();

  const handleNewProductClick = () => {
    setIsCreateProductOpen(!isCreateProductOpen);
  };

  const handleLogoutClick = () => {
    setIsLogoutPopupVisible(true);
  };

  return (
    <>
      <div
        className={`h-full md:items-center flex-col md:bg-white sm:bg-white w-[15rem] absolute block md:block`}
      >
        <div className="flex sm:w-full md:w-full h-full lg:w-full flex-col bg-blue-900">
          <div className="flex flex-col items-center justify-between h-screen pb-5">
            <div className="flex flex-col space-y-3 xl:mt-9 lg:mt-9 md:mt-9 sm:mt-[7rem]">
              <button
                type="button"
                className="gap-1 px-5 py-3 mt-[2rem] text-base font-medium text-blue-800 inline-flex items-center bg-white rounded-t-lg rounded-br-lg text-center"
                onClick={handleNewProductClick}
              >
                <AddToPhotosOutlinedIcon />
                New Product
              </button>
              <Link
                href="/category"
                className={`hover:bg-gray-400 w-[10.5rem] hover:bg-opacity-25 rounded-xl flex items-center px-6 py-4 gap-2 font-light-[16px] transition-all duration-300 ${
                  pathname === "/category"
                    ? "text-gray-100 bg-gray-400 bg-opacity-25"
                    : "text-gray-100"
                }`}
              >
                <SettingsOutlinedIcon />
                <p>category</p>
              </Link>
              <Link
                href="/cart"
                className={`hover:bg-gray-400 hover:bg-opacity-25 rounded-xl flex items-center px-6 py-4 gap-2 font-light-[16px] transition-all duration-300 ${
                  pathname === "/cart"
                    ? "text-gray-100 bg-gray-400 bg-opacity-25"
                    : "text-gray-100"
                }`}
              >
                <AccountBoxOutlinedIcon />
                <p>Cart</p>
              </Link>
              <Link
                href="/product"
                className={`hover:bg-gray-400 hover:bg-opacity-25 rounded-xl flex items-center px-6 py-4 gap-2 font-light-[16px] transition-all duration-300 ${
                  pathname === "/product"
                    ? "text-gray-100 bg-gray-400 bg-opacity-25"
                    : "text-gray-100"
                }`}
              >
                <DashboardCustomizeOutlinedIcon />
                <p>Product</p>
              </Link>
              <Link
                href="/profile"
                className={`hover:bg-gray-400 hover:bg-opacity-25 rounded-xl flex items-center px-6 py-4 gap-2 font-light-[16px] transition-all duration-300 ${
                  pathname === "/profile"
                    ? "text-gray-100 bg-gray-400 bg-opacity-25"
                    : "text-gray-100"
                }`}
              >
                <AccountBoxOutlinedIcon />
                <p>Profile</p>
              </Link>
              <Link
                href="/calendar"
                className={`hover:bg-gray-400 hover:bg-opacity-25 rounded-xl flex items-center px-6 py-4 gap-2 font-light-[16px] transition-all duration-300 ${
                  pathname === "/calendar"
                    ? "text-gray-100 bg-gray-400 bg-opacity-25"
                    : "text-gray-100"
                }`}
              >
                <CalendarMonthOutlinedIcon />
                <p>Calendar</p>
              </Link>
            </div>

            <div className="-ml-1 w-[10rem] flex flex-col space-y-3">
              <div
                type="button"
                className={`hover:bg-gray-400 w-[10.5rem] hover:bg-opacity-25 rounded-xl flex items-center px-6 py-4 gap-2 font-light-[16px] transition-all duration-300 text-gray-100`}
                onClick={handleLogoutClick}
              >
                <ExitToAppOutlinedIcon />
                <LogoutComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isCreateProductOpen && <CreateProduct onClose={() => setIsCreateProductOpen(false)} />}
    </>
  );
};

export default Sidebar;
