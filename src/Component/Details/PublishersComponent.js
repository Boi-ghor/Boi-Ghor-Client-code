import React, { useContext, useEffect, useState } from 'react';
import { LoaderContext } from '../../context/loader';
import { LoadAll } from '../../ApiRequest/ApiRequest';
import BookCardAlt from '../Card/BookCardAlt';
import {BsRss} from "react-icons/bs";

const PublishersComponent = ({ publisher }) => {
    const [books, setBooks] = useState([]);

    // Context
    const { isLoading } = useContext(LoaderContext);

    useEffect(() => {
        if (publisher !== null) {
            loadNewBooks();
        }
    }, [publisher]);

    const loadNewBooks = () => {
        isLoading(true);
        LoadAll("/new-books")
            .then((data) => {
                setBooks(data);
                isLoading(false);
            })
            .catch((error) => {
                isLoading(false);
                console.error(error);
            });
    };
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
            <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-5">Books</h2>
            <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3">
                {books.map((book) => (
                    <div key={book?._id}>
                        <BookCardAlt book={book} />
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default PublishersComponent;
