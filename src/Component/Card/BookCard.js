import React from "react";
import { HiShoppingBag } from "react-icons/hi";
import { MdAdd } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {useCart} from "../../context/useCart";

const BookCard = ({ book }) => {
  const navigate = useNavigate();
const {addToCart}=useCart();
  return (
    <div className="bookCard w-full h-full">
      <div className="flex flex-col h-full">
        <div className="flex justify-center">
          <Link
            className="relative overflow-hidden inline-block group/bookImg"
            to={`/book/${book?.slug}`}
          >
            <div className="absolute -top-24 -right-full z-10 group-hover/bookImg:top-0 group-hover/bookImg:right-0 duration-300">
              <button
                onClick={() => navigate(`/category/${book?.category[0]?.slug}`)}
                className="btn-primary px-3 py-[5px] rounded-bl-lg hidde group-hover/bookImg:inline-block"
              >
                {book?.category[0]?.name}
              </button>
            </div>
            <img
              src={book?.photoURL}
              alt={book?.bookName}
              className="bookCoverImg w-44 max-w-full hover:opacity-80 duration-200"
            />
          </Link>
        </div>
        <div className="my-4 text-center">
          <h4 className="font-semibold capitalize mb-2">{book?.bookName}</h4>
          <h5 className="text-sm">
            <span className="text-gray-500 font-semibold">by </span>


            <Link to={`/author/${book?.author[0]?._id}`} className="capitalize">
              {book?.author[0]?.authorName}
            </Link>

          </h5>
        </div>
        <div className="mt-auto px-3 py-2 bg-red-100 w-full rounded border-red-200 shadow">
          <div className="font-bold text-lg w-1/2 inline-block">${book?.price}</div>
          <button onClick={()=>addToCart(book)} className="btn btn-primary w-1/2 gap-1">
            <AiOutlineShoppingCart size={20} />
          </button>

        </div>
      </div>
    </div>
  );
};

export default BookCard;
