import React, { useEffect, useState } from 'react';
import {LoadAllAlt} from '../../ApiRequest/ApiRequest';
import AuthorsComponent from '../../Component/Details/AuthorsComponent';
import { useParams } from 'react-router-dom';
import axios from "axios";

const AuthorsDetails = () => {
    const { authorId } = useParams();
    const [authors, setAuthors] = useState([]);
    const [AuthorName, setAuthorName] = useState('');

    useEffect(() => {
        LoadAllAlt(`/authors/${authorId}`)
            .then((data) => {
                setAuthors(data);
                setAuthorName(data.authorName);
                console.log(data);
                console.log(data.authorName);
                const requestData = { authorName: data.authorName };
                console.log("req data= "+ JSON.stringify(requestData))
                ReadAuthorsDetails(requestData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [authorId]);

    const ReadAuthorsDetails = (requestData) => {
        let URL = `https://boi-ghor.onrender.com/api/v1/book-by-author`;
        return axios
            .get(URL, requestData) // Send requestData in the HTTP request body
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data);
                    return res.data;
                } else {
                    return false;
                }
            })
            .catch((err) => {
                console.log(err);
                return false;
            });
    };

    return (
        <div>
            <AuthorsComponent  author={authors}/>;

        </div>
    );
};

export default AuthorsDetails;
