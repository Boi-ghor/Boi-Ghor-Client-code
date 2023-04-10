import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="TopNav py-2">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center">
          <div className="hidden sm:flex items-center gap-2">
            <FaWhatsapp className="text-primary" size={42} />
            <div>
              <h4 className="uppercase text-xs sm:text-sm text-textColor font-semibold">
                Call us now
              </h4>
              <small className="text-textColorLight">123-456-7890</small>
            </div>
          </div>
          <div className="logo">
            <Link to="/">
              <img
                className="h-11 sm:h-14 lg:h-16 w-auto"
                src="https://cdn.shopify.com/s/files/1/0319/5758/1961/files/logo_2fc1fb1f-84e8-47ec-b248-390a607da527.png?v=1613796597"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineShoppingCart className="text-primary" size={42} />
            <div>
              <h4 className="uppercase text-xs sm:text-sm text-textColor font-semibold">
                Shopping cart
              </h4>
              <small className="text-textColorLight tracking-wider">item - 02</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
