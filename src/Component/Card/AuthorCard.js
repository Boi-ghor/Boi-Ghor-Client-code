import React from "react";
import author from "../../Assets/img/author.jpg";
const AuthorCard = () => {
  return (
    <div
      className="card w-96 bg-base-100 shadow-xl w-full max-w-[300px] my-4 bg-white border border-gray-200 rounded-lg
        shadow-[hsl(0,100%,91%)] transform transition duration-500 hover:scale-110 
         hover: drop-shadow-lg hover :shadow-[#FF4157]"
    >
      <div className="card-body items-center text-center">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={author} />
          </div>
        </div>
        <h2 className="card-title">Jessica!</h2>
        <p>buy books from this famous author</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
