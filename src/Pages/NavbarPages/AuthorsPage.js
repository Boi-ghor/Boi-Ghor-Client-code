import React, {useContext, useEffect, useState} from "react";

import Authors from "../../Component/NavbarPages/Authors";
import {LoadAllAlt} from "../../ApiRequest/ApiRequest";
import {LoaderContext} from "../../context/loader";

const AuthorsPage = (props) => {
    let [authors, setAuthors] = useState([]);

    // Context
    const {isLoading} = useContext(LoaderContext);

    useEffect(() => {
        loadAuthors();
    }, []);


    const loadAuthors = () => {
        isLoading(true)
        LoadAllAlt("/authors")
            .then((data) => {
                setAuthors(data);
                isLoading(false);
            })
            .catch((error) => {
                isLoading(false);
                console.error(error);
            });
    };

    return (
        <div className="px-6 py-8">
            <div className="border-4 px-6 py-8 mx-auto max-w-7xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-semibold mb-4">Meet Our Authors</h1>
                    <p className="text-lg">
                        Unveiling the minds behind the words - Meet Our Authors. An opportunity to
                        connect with your favorite writers and discover new ones
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 justify-items-center align-items-center">
                    {authors.map((author, i) => {
                        return (
                            <div className="h-auto" key={author._id}>
                                <Authors author={author}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

};

export default AuthorsPage;
