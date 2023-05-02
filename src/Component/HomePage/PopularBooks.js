import React from "react";
import BookCard from "../Card/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const books = [
  {
    id: 1,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publicationYear: 1951,
    genres: ["Fiction", "Coming-of-age"],
    rating: 4.0,
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/HSC_Parallel_Text_Zoology_Chapter_03-Udvash_Academic_And_Admission_Care-4992e-294355.jpg",
    price: 12.99,
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publicationYear: 1937,
    genres: ["Fantasy", "Adventure"],
    rating: 4.6,
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/7534d3a89_138731.jpg",
    price: 9.99,
  },
  {
    id: 3,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publicationYear: 1954,
    genres: ["Fantasy", "Adventure"],
    rating: 4.5,
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/HSC_Parallel_Text_Botany_Chapter_01-Udvash_Academic_And_Admission_Care-bfbb5-294357.jpg",
    price: 15.99,
  },
  {
    id: 4,
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    publicationYear: 1979,
    genres: ["Science Fiction", "Comedy"],
    rating: 4.2,
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/HSC_Science_Foundation_Book_Physics-Udvash_Academic_And_Admission_Care-c74c3-270249.jpg",
    price: 10.99,
  },
  {
    id: 5,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    genres: ["Fiction", "Classic"],
    rating: 4.3,
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/HSC_Parallel_Text_Higher_Math_1st_Paper_-Udvash_Academic_And_Admission_Care-f5575-300382.jpg",
    price: 13.99,
  },
  {
    id: 6,
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949,
    genres: ["Fiction", "Dystopian"],
    rating: 4.5,
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/4f609a739b54_108526.gif",
    price: 11.99,
  },
  {
    id: 7,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    genres: ["Fiction", "Classic"],
    rating: 4.1,
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/f9005b267_131401.jpg",
    price: 12.99,
  },
  {
    id: 8,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publicationYear: 1813,
    genres: ["Fiction", "Romance"],
    rating: 4.2,
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/fece9edf1564_92229.gif",
    price: 13.99,
  },
  {
    id: 9,
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    publicationYear: 1967,
    genres: ["Fiction", "Magical Realism"],
    rating: 4.4,
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/ff58439764f4_51894.jpg",
    price: 8.99,
  },
  {
    id: 10,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    publicationYear: 2003,
    genres: ["Fiction", "Thriller"],
    rating: 3.8,
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/99bd74257_176400.jpg",
    price: 13.99,
  },
];

const PopularBooks = () => {
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
              <SwiperSlide className="h-auto" key={book.id}>
                <BookCard book={book} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 xl:gap-8">
          {books.slice(0, 6).map((book) => {
            return <BookCard book={book} key={book.id} />;
          })}
        </div> */}
      </div>
    </section>
  );
};

export default PopularBooks;
