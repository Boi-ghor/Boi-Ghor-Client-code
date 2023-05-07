import React from 'react';
import {Link} from "react-router-dom";



const Authors = ({ author }) => {
    const { name, id, authorAvatar} = author;


    return (
        <Link
            to={`/author/${id}`}

        >
            <div className="avatar-container">
                <div className="avatar">
                    <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={authorAvatar} alt={name} className="w-full h-64 object-cover" />
                    </div>
                </div>
                <button className="btn btn-outline btn-primary mx-auto mt-4">{name}</button>
            </div>
        </Link>
    )
};

export default Authors;