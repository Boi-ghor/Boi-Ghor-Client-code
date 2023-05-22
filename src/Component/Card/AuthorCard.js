import React from "react";
import { Link } from "react-router-dom";

const AuthorCard = ({ author, books }) => {
  const { authorName, photoURL } = author;

  return (
      <div className="bookCard w-full h-full">
        <div className="flex flex-col h-full">
          <div className="flex justify-center">
            <img
                src={photoURL}
                alt={authorName}
                className="authorImg w-44 max-w-full h-44 rounded-full"
            />
          </div>

          <h4 className="font-semibold mt-6 my-4 sm:my-8">{authorName}</h4>

          <div className="max-w-xs mx-auto mt-auto px-3 py-2 bg-red-100 w-full rounded border-red-200 shadow flex items-center justify-between">
            <h5 className="font-medium">Books: {books?.length || 0}</h5>
            <Link
                to={`/author/${author._id}`}
                className="btn btn-primary btn-sm md:btn-md min-h-8 h-10 rounded capitalize"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
  );
};

export default AuthorCard;
