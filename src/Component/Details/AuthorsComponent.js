import React from 'react';

const AuthorsComponent = ({author}) => {
    const { authorName, _id, photoURL,aboutAuthor} = author;
    return (
        <div className="container mx-auto py-10">
            <div className="flex flex-col md:flex-row md:items-center">
                <img src={photoURL} alt="Author Image"
                     className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg mb-10 md:mb-0 md:mr-10" />
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold text-gray-800 mb-5">{authorName}</h1>
                        <p className="text-xl text-gray-600 mb-5">{aboutAuthor}</p>
                        <a href="#" className="btn btn-primary">Follow</a>
                    </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-5">Books</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="book-image.jpg" alt="" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Book Title</h3>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                euismod euismod nisi vel bibendum.</p>
                        </div>
                </div>

            </div>
        </div>
    );
};

export default AuthorsComponent;