import React from 'react';

import Authors from "../../Component/NavbarPages/Authors";

const authors = [
    {
        id: 1,
        name: "J.K. Rowling",
        authorAvatar:
            "https://randomuser.me/api/portraits/women/5.jpg",
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
            "https://fakedetail.com/userface_image/male/male20171086728369995.png",
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
            "https://randomuser.me/api/portraits/women/7.jpg",
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
            "https://randomuser.me/api/portraits/men/8.jpg",
        books: ["The Hobbit", "The Lord of the Rings", "The Silmarillion"],
    },
    {
        id: 5,
        name: "Haruki Murakami",
        authorAvatar:
            "https://randomuser.me/api/portraits/men/9.jpg",
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
            "https://randomuser.me/api/portraits/men/10.jpg",
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

const AuthorsPage = () => {
    return (
        <div className="px-6 py-8">
        <div className="border-primary border-4 px-6 py-8 mx-auto max-w-7xl">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-primary">Meet Our Authors</h1>
                <p className="text-gray-500 mt-2 text-primary">
                    Meet our authors
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 justify-items-center align-items-center'>

                {authors.map((author) => {
                    return (
                        <div className="h-auto" key={author.id}>
                            <Authors author={author} />
                        </div>
                    );
                })}

            </div>
        </div>
        </div>
    );
};

export default AuthorsPage;