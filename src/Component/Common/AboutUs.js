import React from 'react';

function AboutUs() {
    const teamMembers = [
        {
            name: 'John Doe',
            role: 'Full-Stack Developer',
            bio: 'John is an experienced full-stack developer with expertise in Node.js and React. He is passionate about creating clean and efficient code.',
            avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
            name: 'Jane Smith',
            role: 'Front-End Developer',
            bio: 'Jane is a skilled front-end developer with expertise in HTML, CSS, and JavaScript. She is passionate about creating beautiful and user-friendly interfaces.',
            avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
        },
        {
            name: 'Bob Johnson',
            role: 'Back-End Developer',
            bio: 'Bob is a talented back-end developer with expertise in MongoDB and Express.js. He is passionate about creating scalable and efficient applications.',
            avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        {
            name: 'Sarah Williams',
            role: 'UI/UX Designer',
            bio: 'Sarah is a creative UI/UX designer with expertise in Sketch and Figma. She is passionate about creating intuitive and user-friendly interfaces.',
            avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
        },
        {
            name: 'David Lee',
            role: 'Back-End Developer',
            bio: 'David is a skilled talented back-end developer with expertise in MongoDB and Express.js. He is passionate about creating scalable and efficient applications.',
            avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
        },
        {
            name: 'Emily Chen',
            role: 'Front-End Developer',
            bio: 'Emily is a meticulous Front-End Developer with expertise in automated testing. She is passionate about ensuring the quality of our applications.',
            avatar: 'https://randomuser.me/api/portraits/women/6.jpg'
        },
    ];
    return (
        <div className="px-4 py-6 mx-auto max-w-7xl">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-primary">Welcome to our team of MERN stack developers!</h1>
                <p className="text-gray-500 mt-2 text-primary">
                    We are a group of six highly skilled and experienced individuals who are passionate about creating innovative and cutting-edge software solutions using the latest technologies.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary text-primary-content p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
                    <ul className="list-disc ml-6">
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>React</li>
                        <li>MongoDB</li>
                        <li>Express.js</li>
                    </ul>
                </div>
                <div className="bg-primary text-primary-content p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-4">Our Process</h2>
                    <p>
                        At the heart of our development process is a commitment to delivering high-quality and user-friendly products. To achieve this, we use modern front-end frameworks such as DaisyUI and Tailwind CSS, which allow us to create beautiful and intuitive user interfaces. Additionally, we use MongoDB and Express.js for back-end development, ensuring that our products are scalable and efficient.
                    </p>
                </div>
            </div>
            <div class="divider"></div>
            <div className="px-4 py-6 mx-auto max-w-7xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-primary">Meet Our Team</h1>
                    <p className="text-gray-500 mt-2 text-primary">
                        We are a group of six highly skilled and experienced individuals who are passionate about creating innovative and cutting-edge software solutions using the latest technologies.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="bg-primary text-primary-content rounded-lg overflow-hidden shadow-lg">
                            <div className="relative pt-4">
                                <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full mb-4 mx-auto" />
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2 text-primary-content">{member.name}</h2>
                                <p className="text-gray-500 text-sm mb-2 text-primary-content">{member.role}</p>
                                <p className="text-gray-600 text-base text-primary-content">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default AboutUs;
