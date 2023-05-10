import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import PublisherCard from "../Card/PublisherCard";

const authors = [
  {
    id: 1,
    name: "J.K. Rowling",
    authorAvatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/440px-J._K._Rowling_2010.jpg",
    books: [
      "Harry Potter and the Philosopher's Stone",
      "Harry Potter and the Chamber of Secrets",
      "Harry Potter and the Prisoner of Azkaban",
      "Harry Potter and the Goblet of Fire",
      "Harry Potter and the Order of Phoenix",
      "Harry Potter and the Half-Blood Prince",
      "Harry Potter and the Deathly Hallows",
    ],
  },
  {
    id: 2,
    name: "Stephen King",
    authorAvatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Stephen_King%2C_Comicon.jpg/440px-Stephen_King%2C_Comicon.jpg",
    books: [
      "Carrie",
      "The Shining",
      "The Stand",
      "The Dead Zone",
      "Firestarter",
      "Cujo",
      "It",
      "The Dark Tower",
    ],
  },
  {
    id: 3,
    name: "Agatha Christie",
    authorAvatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Agatha_Christie_in_1925.jpg/440px-Agatha_Christie_in_1925.jpg",
    books: [
      "The Mysterious Affair at Styles",
      "Murder on the Orient Express",
      "Death on the Nile",
      "And Then There Were None",
      "The Murder of Roger Ackroyd",
      "The A.B.C. Murders",
    ],
  },
  {
    id: 4,
    name: "J.R.R. Tolkien",
    authorAvatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/J._R._R._Tolkien_1940s.jpg/440px-J._R._R._Tolkien_1940s.jpg",
    books: ["The Hobbit", "The Lord of the Rings", "The Silmarillion"],
  },
  {
    id: 5,
    name: "Haruki Murakami",
    authorAvatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Haruki_Murakami_at_Berkeley.jpg/440px-Haruki_Murakami_at_Berkeley.jpg",
    books: [
      "Norwegian Wood",
      "Kafka on the Shore",
      "1Q84",
      "The Wind-Up Bird Chronicle",
      "After Dark",
      "Colorless Tsukuru Tazaki and His Years of Pilgrimage",
    ],
  },
  {
    id: 6,
    name: "Virginia Woolf",
    authorAvatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Virginia_Woolf_1927.jpg/440px-Virginia_Woolf_1927.jpg",
    books: ["Mrs Dalloway", "To the Lighthouse", "Orlando", "A Room of One's Own"],
  },
  {
    id: 7,
    name: "Haruki Murakami",
    authorAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
    books: ["Kafka on the Shore", "Norwegian Wood", "1Q84", "The Wind-Up Bird Chronicle"],
  },
  {
    id: 8,
    name: "Jhumpa Lahiri",
    authorAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
    books: ["Interpreter of Maladies", "The Namesake", "Unaccustomed Earth", "The Lowland"],
  },
  {
    id: 9,
    name: "Toni Morrison",
    authorAvatar: "https://randomuser.me/api/portraits/women/3.jpg",
    books: ["Beloved", "Song of Solomon", "The Bluest Eye", "Sula"],
  },
  {
    id: 10,
    name: "Chimamanda Ngozi Adichie",
    authorAvatar: "https://randomuser.me/api/portraits/women/4.jpg",
    books: [
      "Half of a Yellow Sun",
      "Americanah",
      "Purple Hibiscus",
      "The Thing Around Your Neck",
    ],
  },
];

const TopPublishers = () => {
  return (
    <section className="AuthorsSection mb-24">
      <div className="container mx-auto px-3">
        <div className="text-center w-1/2 mx-auto mb-12">
          <h1 className="text-3xl font-semibold mb-4">Top Publishers</h1>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus autem
            doloremque mollitia quod tenetur rem saepe iusto soluta consequatur.
          </p>
        </div>

        <Swiper
          dir="rtl"
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
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper pb-14"
        >
          {authors.map((author) => {
            return (
              <SwiperSlide className="h-auto" key={author.id}>
                <PublisherCard author={author} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default TopPublishers;
