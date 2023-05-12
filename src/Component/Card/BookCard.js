import React from "react";
import { HiShoppingBag } from "react-icons/hi";
import { MdAdd } from "react-icons/md";

const BookCard = ({ book }) => {
  return (
    <div className="bookCard w-full h-full">
      <div className="flex flex-col h-full">
        <div className="flex justify-center">
          <img
            src={book?.photoURL}
            alt={book?.bookName}
            className="bookCoverImg w-44 max-w-full"
          />
        </div>
        <div className="my-4 text-center">
          <h4 className="font-semibold mb-2">{book?.bookName}</h4>
          <h5 className="text-sm">
            <span className="text-gray-500 font-semibold">by </span>
            {book?.author[0].authorName}
          </h5>
        </div>
        <div className="mt-auto px-3 py-2 bg-red-100 w-full rounded border-red-200 shadow">
          <div className="font-bold text-lg w-1/2 inline-block">${book?.price}</div>
          <button className="btn btn-primary min-h-8 h-10 rounded w-1/2">
            <MdAdd className="text-white" size={18} />
            <HiShoppingBag size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
