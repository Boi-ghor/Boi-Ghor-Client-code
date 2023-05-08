import React, {useEffect, useState} from 'react';
import Publishers from "../../Component/NavbarPages/Publishers";
import {ReadPublishers} from "../../ApiRequest/ApiRequest";
import FullScreenLoader from "../../Component/Common/FullScreenLoader";


// const publishers = [
//     {
//         id: 1,
//         name: "Penguin Books",
//         publisherAvatar: "https://picsum.photos/seed/publisher1/200",
//     },
//     {
//         id: 2,
//         name: "HarperCollins",
//         publisherAvatar: "https://picsum.photos/seed/publisher2/200",
//     },
//     {
//         id: 3,
//         name: "Random House",
//         publisherAvatar: "https://picsum.photos/seed/publisher3/200",
//     },
//     {
//         id: 4,
//         name: "Simon & Schuster",
//         publisherAvatar: "https://picsum.photos/seed/publisher4/200",
//     },
//     {
//         id: 5,
//         name: "Macmillan Publishers",
//         publisherAvatar: "https://picsum.photos/seed/publisher5/200",
//     },
//     {
//         id: 6,
//         name: "Hachette Book Group",
//         publisherAvatar: "https://picsum.photos/seed/publisher6/200",
//     },
//     {
//         id: 7,
//         name: "Bloomsbury Publishing",
//         publisherAvatar: "https://picsum.photos/seed/publisher7/200",
//     },
//     {
//         id: 8,
//         name: "Scholastic Corporation",
//         publisherAvatar: "https://picsum.photos/seed/publisher8/200",
//     },
//     {
//         id: 9,
//         name: "Parragon Books",
//         publisherAvatar: "https://picsum.photos/seed/publisher9/200",
//     },
//     {
//         id: 10,
//         name: "Wiley",
//         publisherAvatar: "https://picsum.photos/seed/publisher10/200",
//     },
// ];

const PublishersPage = (props) => {
    let [publishers, SetPublishers] = useState([])
    useEffect(() => {
        ReadPublishers().then((Result) => {
            SetPublishers(Result)

        })
    }, [])
    if (publishers.length > 0){
    return (
        <div className="px-6 py-8">
            <div className="border-primary border-4 px-6 py-8 mx-auto max-w-7xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-primary">Meet Our Publishers</h1>
                    <p className="text-gray-500 mt-2 text-primary">
                        Meet our Publishers
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 justify-items-center align-items-center'>

                    {publishers.map((publishers) => {
                        return (
                            <div className="h-auto" key={publishers._id}>
                                <Publishers publishers={publishers} />
                            </div>

                        );
                    })}

                </div>
            </div>
        </div>
    );
    }
    else {
        return (
            <div>
                <FullScreenLoader />
            </div>
        )
    }
};

export default PublishersPage;