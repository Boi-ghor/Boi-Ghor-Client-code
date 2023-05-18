import React from "react";
import { Link } from "react-router-dom";

const PublisherCard = ({ author }) => {
  const { id, name, books } = author;

  return (
    <div className="bookCard w-full h-full">
      <div className="flex flex-col h-full">
        <div className="flex justify-center">
          <img
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt={name}
            className="authorImg w-44 max-w-full h-44 rounded-lg"
          />
        </div>

        <h4 className="font-semibold mt-6 my-4 sm:my-8">{name}</h4>

        <div className="max-w-xs mx-auto mt-auto px-3 py-2 bg-red-100 w-full rounded border-red-200 shadow flex items-center justify-between">
          <h5 className="font-medium">Books: {books.length}</h5>
          <Link
            to={`/author/${id}`}
            className="btn btn-primary btn-sm md:btn-md min-h-8 h-10 rounded capitalize"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PublisherCard;
