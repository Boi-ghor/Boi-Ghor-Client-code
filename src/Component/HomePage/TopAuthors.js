import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import AuthorCard from "../Card/AuthorCard";
import { LoadAllAlt } from "../../ApiRequest/ApiRequest";
import axios from "axios";
import InLoader from "../Common/InLoader";


const TopAuthors = () => {
    const [authors, setAuthors] = useState([]);
    const [bookData, setBookData] = useState({});
    const [isLoading, setIsLoading] = useState(true); // Add loading state

    useEffect(() => {
        loadAuthors();
    }, []);

    const loadAuthors = async () => {
        try {
            const authorsData = await LoadAllAlt("/authors");
            setAuthors(authorsData);
            const bookDataPromises = authorsData.map((author) =>
                axios.get(`/book-by-author/${author._id}`).then((response) => response.data)
            );
            const resolvedBookData = await Promise.all(bookDataPromises);
            setBookData(resolvedBookData);
            setIsLoading(false); // Set loading state to false after data is fetched
        } catch (error) {
            console.error(error);
        }
    };

    // Display loader while loading or AuthorCard when bookData is available
    const renderContent = () => {
        if (isLoading) {
            return <InLoader/>;
        } else {
            return (
                <Swiper
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
                    {authors.map((author, index) => (
                        <SwiperSlide className="h-auto" key={author._id}>
                            <AuthorCard author={author} books={bookData[index]} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            );
        }
    };

    return (
        <section className="AuthorsSection mb-24">
            <div className="container mx-auto px-3">
                <div className="text-center lg:w-2/3 xl:w-1/2 mx-auto mb-12">
                    <h1 className="text-3xl font-semibold mb-4">Top Authors</h1>
                    <p className="text-lg">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus autem doloremque mollitia quod
                        tenetur rem saepe iusto soluta consequatur.
                    </p>
                </div>

                {renderContent()}
            </div>
        </section>
    );
};

export default TopAuthors;
