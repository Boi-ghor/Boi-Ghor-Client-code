import React from 'react';
import {Link} from "react-router-dom";

const Publishers = ({ publishers }) => {
    const { publisherName, photoURL} = publishers;


    return (
        <Link
            to={`/books-by-publisher/${publisherName}`}

        >


            <div className="card w-64 h-64">
                <figure className="px-10 pt-10">
                    <img src={photoURL} alt={publisherName} className="rounded-xl"/>
                </figure>
                        <button className="btn btn-outline btn-primary mx-auto mt-4">{publisherName}</button>
            </div>
        </Link>
    )
};

export default Publishers;