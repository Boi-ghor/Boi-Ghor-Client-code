import React, {useEffect, useState} from 'react';
import {LoadAll, LoadAllAlt} from "../../ApiRequest/ApiRequest";
import {useParams} from "react-router-dom";
import AuthorsComponent from "../../Component/Details/AuthorsComponent";

const Authors = () => {
    // hooks
    const { authorId } = useParams();
    console.log(authorId)

    let [authors, SetAuthors] = useState([]);
    useEffect(() => {
        LoadAuthor(authorId);
        console.log(authorId)
    }, []);

    const LoadAuthor = (authorId) => {
        isLoading(true);
        LoadAllAlt(`/authors/${authorId}`)
            .then((data) => {
                SetAuthors(data);
                isLoading(false);
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div>
            {authors.map((author, i) => {
                return (
            <AuthorsComponent author={author} key={i}/>
                )
            })}
        </div>
    );
};

export default Authors;