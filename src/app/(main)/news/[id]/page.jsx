import { getNewsDetails } from '@/lib/data-fetch';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetails(id);

    return {
        title: news.title,
        description: news.details.slice(0, 160) + '...'
    };
}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetails(id);
    
    
    return (
        <div className='border border-base-300 rounded-lg p-4'>
            <Image 
            src={news.image_url} 
            alt={news.title} 
            width={600} 
            height={480}
            className='w-full h-120 rounded-lg mb-4 object-center object-cover' 
            />
            <h1 className='text-2xl lg:text-4xl font-bold mb-10'>{news.title}</h1>
            <p className='text-gray-600'>{news.details}</p>
            <Link href={`/category/${news.category_id}`} className='text-blue-500 underline mt-4 inline-block'>
                <button className='btn btn-primary mt-6'>Go Back</button>
            </Link>
        </div>
    );
};

export default NewsDetailsPage;