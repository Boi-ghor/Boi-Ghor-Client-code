import React, { useContext, useEffect, useState } from 'react';
import { LoaderContext } from '../../context/loader';
import { LoadAll } from '../../ApiRequest/ApiRequest';
import BookCardAlt from '../Card/BookCardAlt';

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
        <div className="container mx-auto py-10">
            <section className="bg-white py-10">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="flex justify-center">
                            <div className="w-1/2">
                                <img className="mx-auto rounded-full w-32 h-32 object-cover"
                                     src={photoURL}
                                     alt="publisherName"/>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-5">{publisherName}</h1>
                        <p className="text-xl text-gray-600 mb-5">{aboutPublisher}</p>

                    </div>
                </div>
            </section>

            <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-5">Books</h2>

            <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3">
                {books.map((book) => (
                    <div key={book?._id}>
                        <BookCardAlt book={book} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PublishersComponent;
