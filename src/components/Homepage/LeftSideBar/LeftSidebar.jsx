import { getCategories } from '@/lib/data-fetch';
import Link from 'next/link';
import React from 'react';

const LeftSidebar = async ({ activeId }) => {

    const categories = await getCategories();

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4 text-base-content">All Categories</h2>
            <div className='text-base-content'>
                <ul className='space-y-3'>
                    {
                        categories.map((category) => (
                            <li
                                key={category.category_id}
                                className={`font-semibold text-lg py-4 w-full text-center rounded-lg cursor-pointer ${category.category_id === activeId ? 'bg-base-300' : 'text-gray-400 hover:bg-base-300 hover:text-base-content duration-300 transition-all'}`}
                            >
                                <Link className='block' href={`/category/${category.category_id}`}>
                                    {category.category_name}
                                </Link>
                            </li>
                        )) 
                    }
                </ul>
            </div>
        </div>
    );
};

export default LeftSidebar;