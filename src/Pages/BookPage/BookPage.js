import React, { useState } from "react";
import { ImHome } from "react-icons/im";
import { AiFillRead } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { FaFilter } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import BookCard from "../../Component/Card/BookCard";

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
  {
    id: 11,
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
    id: 12,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publicationYear: 1937,
    genres: ["Fantasy", "Adventure"],
    rating: 4.6,
    coverImage:
      "https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/7534d3a89_138731.jpg",
    price: 9.99,
  },
];

const BookPage = () => {
  const [price, setPrice] = useState(500);
  const [showFilterArea, setShowFilterArea] = useState(false);
  const [isListView, setIsListView] = useState(false);

  const handleListView = () => {
    setIsListView(!isListView);
  };

  const handleSortBooks = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <div
        className="h-80 relative before:absolute before:content-[''] before:w-full before:h-full before:bg-black before:bg-opacity-60  hidden items-center"
        style={{
          backgroundImage:
            "url(https://www.shutterstock.com/image-vector/stacks-books-reading-pile-textbooks-260nw-1988002235.jpg)",
        }}
      >
        <div className="container mx-auto px-3">
          <div className="bannerContent relative text-white flex flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold mb-4">
              Discover new worlds between the pages
            </h1>
            <div className="breadcrumbs text-lg">
              <ul>
                <li>
                  <Link>
                    <ImHome />
                    <span className="ms-2">Home</span>
                  </Link>
                </li>
                <li>
                  <AiFillRead />
                  <span className="ms-2">Home</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-3">
          <div className="grid grid-cols-12 gap-10">
            <div
              className={`col-span-3 flex flex-col gap-10 bg-white fixed lg:static top-0 ${
                showFilterArea ? "left-0" : "-left-72"
              } duration-300 w-72 max-w-full lg:w-full h-screen lg:h-full overflow-y-auto px-4 py-6 lg:px-0 lg:py-0 shadow-2xl lg:shadow-none`}
            >
              <div>
                <div
                  className="cursor-pointer hover:opacity-70 duration-200 flex justify-end mb-1 lg:hidden"
                  onClick={() => setShowFilterArea(!showFilterArea)}
                >
                  <GrClose size={22} />
                </div>
                <h3 className="font-semibold text-xl mb-2">Sort By</h3>
                <div className="sortOptions">
                  <div className="form-control">
                    <label className="label justify-start gap-3 cursor-pointer">
                      <input
                        onChange={handleSortBooks}
                        type="radio"
                        name="sortBooksRadio"
                        className="radio radio-sm radio-primary"
                        value="dateNewToOld"
                        defaultChecked
                      />
                      <span>Date, new to old</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label justify-start gap-3 cursor-pointer">
                      <input
                        onChange={handleSortBooks}
                        type="radio"
                        name="sortBooksRadio"
                        className="radio radio-sm radio-primary"
                        value="dateOldToNew"
                      />
                      <span>Date, old to new</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label justify-start gap-3 cursor-pointer">
                      <input
                        onChange={handleSortBooks}
                        type="radio"
                        name="sortBooksRadio"
                        className="radio radio-sm radio-primary"
                        value="featured"
                      />
                      <span>Featured</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label justify-start gap-3 cursor-pointer">
                      <input
                        onChange={handleSortBooks}
                        type="radio"
                        name="sortBooksRadio"
                        className="radio radio-sm radio-primary"
                        value="bestSelling"
                      />
                      <span>Best selling</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label justify-start gap-3 cursor-pointer">
                      <input
                        onChange={handleSortBooks}
                        type="radio"
                        name="sortBooksRadio"
                        className="radio radio-sm radio-primary"
                        value="priceLowToHight"
                      />
                      <span>Price, low to high</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label justify-start gap-3 cursor-pointer">
                      <input
                        onChange={handleSortBooks}
                        type="radio"
                        name="sortBooksRadio"
                        className="radio radio-sm radio-primary"
                        value="priceHighToLow"
                      />
                      <span>Price, high to low</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label justify-start gap-3 cursor-pointer">
                      <input
                        onChange={handleSortBooks}
                        type="radio"
                        name="sortBooksRadio"
                        className="radio radio-sm radio-primary"
                        value="alphabetically_A_Z"
                      />
                      <span>Alphabetically, A-Z</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label justify-start gap-3 cursor-pointer">
                      <input
                        onChange={handleSortBooks}
                        type="radio"
                        name="sortBooksRadio"
                        className="radio radio-sm radio-primary"
                        value="alphabetically_Z_A"
                      />
                      <span>Alphabetically, Z-A</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-2">Category</h3>
                <div className="form-control">
                  <label className="label justify-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary rounded-md"
                    />
                    <span>Category Name</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label justify-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary rounded-md"
                    />
                    <span>Category Name</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label justify-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary rounded-md"
                    />
                    <span>Category Name</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label justify-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary rounded-md"
                    />
                    <span>Category Name</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label justify-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary rounded-md"
                    />
                    <span>Category Name</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label justify-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary rounded-md"
                    />
                    <span>Category Name</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label justify-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary rounded-md"
                    />
                    <span>Category Name</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label justify-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary rounded-md"
                    />
                    <span>Category Name</span>
                  </label>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Price</h3>
                <div>
                  <div>
                    <Slider
                      min={9.99}
                      max={1500}
                      value={500}
                      onAfterChange={(changedPrice) => setPrice(changedPrice)}
                    />
                    <h4 className="text-primary font-semibold mt-2 flex justify-between">
                      <span>$9.99 - $1500</span>
                      <span>${price}</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    window.location.reload();
                  }}
                  className="btn btn-block btn-primary"
                >
                  Reset All
                </button>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-9">
              <div className="border bg-white p-3 rounded-md shadow-md flex justify-between items-center mb-16">
                <p className="text-lg flex items-center gap-2">
                  12 Products
                  <span
                    className="cursor-pointer hover:opacity-70 duration-200 lg:hidden"
                    onClick={() => setShowFilterArea(!showFilterArea)}
                  >
                    <FaFilter />
                  </span>
                </p>
                <div className="flex gap-3">
                  <span
                    onClick={handleListView}
                    className={`${!isListView && "bg-gray-200"} p-2 rounded cursor-pointer`}
                  >
                    <IoGrid size={20} />
                  </span>
                  <span
                    onClick={handleListView}
                    className={`${isListView && "bg-gray-200"} p-2 rounded cursor-pointer`}
                  >
                    <FaList size={20} />
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-14">
                {books.map((book) => {
                  return <BookCard book={book} key={book?.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookPage;
