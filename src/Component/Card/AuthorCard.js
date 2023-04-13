import React from 'react';
import author from "../../Assets/img/author.jpg"
const AuthorCard = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <div class="avatar">
                    <div class="w-24 rounded-full">
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