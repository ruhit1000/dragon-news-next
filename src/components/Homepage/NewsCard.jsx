import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa6';
import { RxEyeOpen } from 'react-icons/rx';

const NewsCard = ({ news }) => {


    return (
        <div className='border border-base-300 rounded-lg'>
            {/* Header */}
            <div className='flex items-center gap-4 bg-base-300 p-4 rounded-t-lg'>
                <div>
                    {news?.author?.img ? (
                        <Image
                            loading='eager'
                            src={news.author.img}
                            alt={news.author.name || "Author"}
                            width={50}
                            height={50}
                            className='rounded-full'
                        />
                    ) : (
                        <div className="w-12.5 h-12.5 bg-gray-300 rounded-full" />
                    )}
                </div>
                <div className='flex justify-between items-center w-full'>
                    <div>
                        <h3 className='font-semibold text-[#403F3F] text-lg'>{news.author.name || "Unknown Author"}</h3>
                        <p className='text-sm text-gray-500'>{news.author.published_date?.slice(0, 10)}</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <CiBookmark size={20} />
                        <CiShare2 size={20} />
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className='p-5'>
                <h2 className='text-4xl font-bold mb-3 text-base-content'>{news.title}</h2>
                <Image
                    loading='lazy'
                    src={news.image_url}
                    alt={news.title}
                    width={600}
                    height={400}
                    className='w-full h-100 rounded-lg mb-4 object-center object-cover'
                />
                <p className='text-gray-700 opacity-90 text-lg'>{news.details.slice(0, 200)}...
                </p>
                <span>
                    <Link href={`/news/${news._id}`} className='text-blue-500 underline ml-2'>Read More</Link>
                </span>
                <hr className='border-base-300 my-5' />
                <div className='flex items-center justify-between'>
                    <p className='flex items-center gap-2'>Rating: {news.rating.number || "N/A"}<FaStar color='orange' /></p>
                    <p className='flex items-center gap-2'><RxEyeOpen /> {news.total_view || "N/A"}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;