import React from 'react';
import {Link} from "react-router-dom";

const Publishers = ({ publishers }) => {
    const { publisherName, _id, photoURL, sellCount} = publishers;


    return (

    <div className="bookCard w-full h-full">
        <div className="flex flex-col h-full">
            <div className="flex justify-center">
                <img src={photoURL} alt={publisherName}
                    className="authorImg w-44 max-w-full h-44 rounded-lg"
                />
            </div>

            <h4 className="font-semibold my-8">{publisherName}</h4>

            <div className="mt-auto px-3 py-2 bg-red-100 w-full rounded border-red-200 shadow flex items-center justify-between">
                <div className="font-medium">Books sold: {sellCount}&nbsp;</div>
                <Link
                    to={`/publisher/${_id}`}
                    className="btn btn-primary min-h-8 h-10 rounded capitalize"
                >
                    View Details
                </Link>
            </div>
        </div>
    </div>
    )
};

export default Publishers;