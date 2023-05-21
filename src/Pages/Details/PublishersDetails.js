import React, {useContext, useEffect, useState} from 'react';
import {LoadAllAlt} from '../../ApiRequest/ApiRequest';
import PublishersComponent from '../../Component/Details/PublishersComponent';
import {useParams} from 'react-router-dom';
import axios from "axios";
import {LoaderContext} from "../../context/loader";

const PublishersDetails = () => {
    const {publisherId} = useParams();
    const [publishers, setPublisher] = useState(null);
    const [books, setBooks] = useState([]);
    const {isLoading} = useContext(LoaderContext);

    useEffect(() => {
        LoadPublishers();
    }, []);


    const LoadPublishers=()=>{
        isLoading(true)
        LoadAllAlt(`/publishers/${publisherId}`)
            .then((data) => {
                setPublisher(data);
                console.log(data);
                ReadPublishersDetails().then((data) => {
                    console.log(data)
                    isLoading(false)
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const ReadPublishersDetails = () => {
        let URL = `https://boi-ghor.onrender.com/api/v1/books-by-publisher/${publisherId}`;
        console.log(URL)

        return axios
            .get(URL)
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    setBooks(res.data); // Set books with the fetched data
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
        <div className="py-6 bg-[#f1f2f4]">
            <PublishersComponent publisher={publishers} books={books}/>
        </div>
    );
};

export default PublishersDetails;
