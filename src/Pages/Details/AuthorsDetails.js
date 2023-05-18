import React, { useEffect, useState } from 'react';
import {LoadAllAlt} from '../../ApiRequest/ApiRequest';
import AuthorsComponent from '../../Component/Details/AuthorsComponent';
import { useParams } from 'react-router-dom';
import axios from "axios";

const AuthorsDetails = () => {
    const { authorId } = useParams();
    const [authors, setAuthors] = useState({});
  

    useEffect(() => {
        LoadAllAlt(`/authors/${authorId}`)
            .then((data) => {
                setAuthors(data);
                console.log(data);
                console.log(data.authorName);


            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
   

useEffect(()=>{
    

    ReadAuthorsDetails().then(data=>console.log(data))
},[authors])

    const ReadAuthorsDetails = () => {
        const data={
            authorName:authors?.authorName
        }
        console.log(data)
        let URL = `/book-by-author`;
        return axios
            .get(URL, {authoName:"yousuf khan"}) // Send requestData in the HTTP request body
            .then((res) => {

                console.log(res)
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
