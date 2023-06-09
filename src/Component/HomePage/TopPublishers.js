import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import PublisherCard from "../Card/PublisherCard";
import {LoadAllAlt} from "../../ApiRequest/ApiRequest";
import axios from "axios";
import InLoader from "../Common/InLoader";

const TopPublishers = () => {

    const [publishers, setPublishers] = useState([]);
    const [bookData, setBookData] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        loadPublishers();
    }, []);

    const loadPublishers = async () => {
        try {
            const publishersData = await LoadAllAlt("/publishers");
            setPublishers(publishersData);
            const bookDataPromises = publishersData.map((publisher) =>
                axios.get(`/books-by-publisher/${publisher._id}`)
                    .then((response) => response.data)
            );
            const resolvedBookData = await Promise.all(bookDataPromises);
            setBookData(resolvedBookData);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };


    const renderContent = () => {
        if (isLoading) {
            return <InLoader/>;
        } else {
            return (
                <Swiper
                    dir="rtl"
                    breakpoints={{
                        1280: {
                            slidesPerView: 5,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                    }}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper pb-14"
                >
                    {publishers.map((publisher, index) => {
                        return (
                            <SwiperSlide className="h-auto" key={publisher._id}>
                                <PublisherCard publisher={publisher} books={bookData[index]}/>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            )
        }
    };



    return (
        <section className="AuthorsSection mb-24">
            <div className="container mx-auto px-3">
                <div className="text-center lg:w-2/3 xl:w-1/2 mx-auto mb-12">
                    <h1 className="text-3xl font-semibold mb-4">Top Publishers</h1>
                    <p className="text-lg">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus autem
                        doloremque mollitia quod tenetur rem saepe iusto soluta consequatur.
                    </p>
                </div>
                {renderContent()}

            </div>
        </section>
    );
};

export default TopPublishers;
