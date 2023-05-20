import React, {useContext, useEffect, useState} from 'react';
import {LoaderContext} from "../../context/loader";
import {LoadAll} from "../../ApiRequest/ApiRequest";
import BookCardAlt from "../Card/BookCardAlt";
import {BsFillFileEarmarkPersonFill} from "react-icons/bs";

const AuthorsComponent = ({author}) => {
    const [books, setBooks] = useState([]);

    // Context
    const { isLoading } = useContext(LoaderContext);

    useEffect(() => {
        loadNewBooks();
    }, []);

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
    const { authorName, _id, photoURL,aboutAuthor} = author;
    return (
        <div className="container mx-auto">

            <section className="py-10">
                <div className="grid gap-6 shadow-md">
                    <div className="col-span-8 xl:col-span-9 bg-white rounded-tl-lg rounded-bl-lg">
                        <div className="grid grid-cols-12">
                            <div className="col-span-5 xl:col-span-4 p-6">
                                <div>
                                    <img className="w-full object-cover" src={photoURL} alt={authorName} />
                                </div>
                            </div>
                            <div className="col-span-7 xl:col-span-8 p-6 pl-0">
                                <div>
                                    <h2 className="capitalize text-6xl mb-1 py-5">{authorName}</h2>


                                    <p className="flex text-2xl gap-2 mb-10">
                    <span className="pt-1">
                      <BsFillFileEarmarkPersonFill size={24} />
                    </span>
                                        {aboutAuthor}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <div className="p-6 py-7 bg-white shadow mt-16 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-5">Books by {authorName}</h2>
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

export default AuthorsComponent;