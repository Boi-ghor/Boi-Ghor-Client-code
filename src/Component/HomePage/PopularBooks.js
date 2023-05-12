import React, { useState, useContext, useEffect } from "react";
import BookCard from "../Card/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import { LoadAll } from "../../ApiRequest/ApiRequest";
import { LoaderContext } from "../../context/loader";

import "swiper/css";
import "swiper/css/pagination";

const PopularBooks = () => {
  const [books, setBooks] = useState([]);

  // Context
  const { isLoading } = useContext(LoaderContext);

  useEffect(() => {
    loadPopularBooks();
  }, []);

  const loadPopularBooks = () => {
    isLoading(true);
    LoadAll("/popular-books")
      .then((data) => {
        setBooks(data);
        isLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="popularBooksSection mb-24">
      <div className="container mx-auto px-3">
        <div className="text-center w-1/2 mx-auto mb-12">
          <h1 className="text-3xl font-semibold mb-4">Popular Books</h1>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus autem
            doloremque mollitia quod tenetur rem saepe iusto soluta consequatur.
          </p>
        </div>

        <Swiper
          breakpoints={{
            1280: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 4,
            },
            640: {
              slidesPerView: 3,
            },
            350: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper pb-14"
        >
          {books.map((book) => {
            return (
              <SwiperSlide className="h-auto" key={book?._id}>
                <BookCard book={book} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularBooks;
