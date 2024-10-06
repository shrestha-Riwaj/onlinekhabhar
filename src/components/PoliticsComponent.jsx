import { useState } from 'react';
import Laptop from '../images/laptop1.jpg';

export default function PoliticsComponent() {
    const [articles, setArticles] = useState([
        {
            id: 1,
            title: 'Nepal to face Bahrain in AFC U-20',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            time: '3 days ago',
            image: Laptop,
        },
        {
            id: 2,
            title: 'Upcoming Tech Trends in 2023',
            description: 'Explore the latest in technology and innovation.',
            time: '5 days ago',
            image: Laptop,
        },
        {
            id: 3,
            title: 'Traveling the World: Tips and Tricks',
            description: 'Discover the best travel destinations for 2023.',
            time: '1 week ago',
            image: Laptop,
        },
    ]);

    return (
        <>
            {/* Creating articles */}
            <div className="grid grid-cols-4 mx-10 gap-2">
                {articles.map(article => (
                    <div key={article.id} className="flex flex-col gap-2">
                        {/* Images */}
                        <div>
                            <img src={article.image} alt={article.title} />
                        </div>
                        {/* Heading and paragraph */}
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold text-xl hover:text-blue-900 cursor-pointer'>{article.title}</h1>
                            <p className='font-normal text-lg line-clamp-2 text-gray-500'>{article.description}</p>
                        </div>
                        {/* Time */}
                        <div className='flex gap-2 font-light text-gray-400'>
                            <i className="ri-time-line"></i>
                            <p>{article.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
