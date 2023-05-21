import React, {useContext, useEffect, useState} from 'react';
import {LoadAllAlt} from '../../ApiRequest/ApiRequest';
import AuthorsComponent from '../../Component/Details/AuthorsComponent';
import {useParams} from 'react-router-dom';
import axios from "axios";
import {LoaderContext} from "../../context/loader";

const AuthorsDetails = () => {
    const {authorId} = useParams();
    const [authors, setAuthors] = useState({});
    const [books, setBooks] = useState([]);
    const {isLoading} = useContext(LoaderContext);

    useEffect(() => {
        LoadAuthors();
    }, []);


    const LoadAuthors = () => {
        isLoading(true)
        LoadAllAlt(`/authors/${authorId}`)
            .then((data) => {

                setAuthors(data);
                console.log(data);
                ReadAuthorsDetails().then((data) => {
                    console.log(data)
                    isLoading(false)
                });

            })
            .catch((error) => {
                console.log(error);
            });
    }


    const ReadAuthorsDetails = () => {
        let URL = `https://boi-ghor.onrender.com/api/v1/book-by-author/${authorId}`;

        return axios
            .get(URL)
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    setBooks(res.data); // Set books with the fetched data
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
        <div className="py-6 bg-[#f1f2f4]">
            <AuthorsComponent author={authors} books={books}/>;

        </div>
    );
};

export default AuthorsDetails;
