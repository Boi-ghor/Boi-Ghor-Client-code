import React, { useEffect, useState } from 'react';
import { LoadAllAlt } from '../../ApiRequest/ApiRequest';
import PublishersComponent from '../../Component/Details/PublishersComponent';
import { useParams } from 'react-router-dom';
import axios from "axios";

const PublishersDetails = () => {
    const { publisherId } = useParams();
    const [publishers, setPublisher] = useState(null);

    useEffect(() => {
        LoadAllAlt(`/publishers/${publisherId}`)
            .then((data) => {
                setPublisher(data);
                console.log(data);
                // ReadPublishersDetails(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [publisherId]);

    // const ReadPublishersDetails = (data) => {
    //     const requestData = { publisherName: data.publisherName };
    //     let URL = `https://boi-ghor.onrender.com/api/v1/book-by-publisher`;
    //     return axios
    //         .get(URL, { params: requestData })
    //         .then((res) => {
    //             if (res.status === 200) {
    //                 console.log(res.data);
    //                 return res.data;
    //             } else {
    //                 return false;
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             return false;
    //         });
    // };

    return (
        <div className="py-16 bg-[#f1f2f4]">
            <PublishersComponent publisher={publishers} />
        </div>
    );
};

export default PublishersDetails;
