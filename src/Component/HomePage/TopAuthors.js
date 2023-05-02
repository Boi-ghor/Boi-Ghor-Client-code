import React from "react";
import AuthorCard from "../Card/AuthorCard";
const author = [1, 2, 3, 4, 5, 6];

const TopAuthors = () => {
  return (
    <div>
      <div className="flex items-center">
        <h1 className="text-3xl font-semibold mx-10 my-6">Top Authors</h1>
        <button className="btn btn-primary ml-auto">See more</button>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {author.slice(0, 4).map((i) => {
          return <AuthorCard key={i} />;
        })}
      </div>
    </div>
  );
};

export default TopAuthors;
