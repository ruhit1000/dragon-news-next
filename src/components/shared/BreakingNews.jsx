import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    { id: 1, title: "BREAKING: Local Penguins Commandeer Ice Cream Truck" },
    { id: 2, title: "Meteorologists Baffled as It Rains Marshmallows Downtown" },
    { id: 3, title: "Scientists Discover Cats Can Speak But Actively Choose Not To" },
    { id: 4, title: "City Mayor Outlaws Mondays, Week Now Starts on Tuesday" },
    { id: 5, title: "Aliens Land on Earth, Immediately Demand to Speak to a Manager" }
];

const BreakingNews = () => {
    return (
        <div className='h-20 bg-base-300 flex items-center p-4 justify-between mb-4'>
            <button className='btn bg-[#D72050] text-base-100 mr-2'>
                Latest News
            </button>
            <Marquee 
            className='font-semibold text-base-content text-lg'
            pauseOnHover={true}
            >
                {news.map(item => (
                    <span key={item.id} className='mx-6'>
                        {item.title}
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default BreakingNews;