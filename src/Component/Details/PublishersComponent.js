import React, { useContext, useEffect, useState } from 'react';
import {BsRss} from "react-icons/bs";
import BookCard from "../Card/BookCard";

const PublishersComponent = ({ publisher,books }) => {

    if (publisher === null) {
        return null; // Return null if the publisher prop is null
    }
    const { publisherName, _id, photoURL,aboutPublisher} = publisher;

    return (
        <div className="container mx-auto">
            <section>
                <div className="grid gap-6 shadow-md">
                    <div className="col-span-8 xl:col-span-9 bg-white rounded-tl-lg rounded-bl-lg">
                        <div className="grid grid-cols-12">
                            <div className="col-span-5 xl:col-span-4 p-6">
                                <div className="flex justify-center items-center h-full">
                                    <img className="w-2/4 object-cover" src={photoURL} alt={publisherName} />
                                </div>
                            </div>

                            <div className="col-span-7 xl:col-span-8 p-6 pl-0">
                                <div>
                                    <h2 className="capitalize text-6xl mb-1 py-5">{publisherName}</h2>


                                    <p className="flex text-2xl gap-2 mb-10">
                    <span className="pt-1">
                      <BsRss size={24} />
                    </span>
                                        {aboutPublisher}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="p-6 bg-white shadow mt-6 rounded-lg">
                <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-5">Books by {publisherName}</h2>
                {books.length > 0 && (
                    <div>
                        <h1>Number of books: {books.length}</h1>
                        <br />
                    </div>
                )}
                <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3">

                    {books.length > 0 ? (
                        books.map((book) => (
                            <div key={book?._id}>
                                <BookCard book={book} /> {/* Replace with your BookCard component */}
                            </div>
                        ))
                    ) : (
                        <h1>Oops! We don't have book by {publisherName} right now.</h1>
                    )}
                </div>
            </div>

        </div>
    );
};

export default PublishersComponent;
