import React from "react";
import { Link } from "react-router-dom";
const AuthorCard = ({ author }) => {
  const { id, name, books } = author;

  return (
    <div className="bookCard w-full h-full">
      <div className="flex flex-col h-full">
        <div className="flex justify-center">
          <img
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt={name}
            className="authorImg w-44 max-w-full h-44 rounded-full"
          />
        </div>

        <h4 className="font-semibold my-8">{name}</h4>

        <div className="mt-auto px-3 py-2 bg-red-100 w-full rounded border-red-200 shadow flex items-center justify-between">
          <div className="font-medium">Books: ${books.length}</div>
          <Link
            to={`/author/${id}`}

          >

          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
