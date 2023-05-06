import React from 'react';
import {Link} from "react-router-dom";

const Publishers = ({ publishers }) => {
    const { name, id, publisherAvatar} = publishers;


    return (
        <Link
            to={`/publisher/${id}`}

        >


            <div className="card w-64 h-64">
                <figure className="px-10 pt-10">
                    <img src={publisherAvatar} alt={name} className="rounded-xl"/>
                </figure>
                        <button className="btn btn-outline btn-primary mx-auto mt-4">{name}</button>
            </div>
        </Link>
    )
};

export default Publishers;