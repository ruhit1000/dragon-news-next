import LeftSidebar from '@/components/Homepage/LeftSideBar/LeftSidebar';
import RightSideBar from '@/components/Homepage/RightSideBar/RightSideBar';
import { getNewsByCategory } from '@/data/data-fetch';
import React from 'react';

const NewsCategoryPage = async ({ params }) => {

    const { id } = await params;

    const newsList = await getNewsByCategory(id);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-1 lg:px-6 py-8">

            <div className="hidden col-span-2 lg:block">
                <LeftSidebar activeId={id} />
            </div>

            <div className="col-span-8">
                <h2 className="text-xl font-semibold mb-4 text-base-content">Dragon News Home</h2>
                <div>
                    {
                        newsList.status ? (
                            newsList.data.map(news => (
                                <div key={news._id} className="mb-4 p-4 bg-base-100 border border-base-300 rounded-box">
                                    <h3 className="text-lg font-bold mb-2">{news.title}</h3>
                                    <p className="opacity-70">{news.details.slice(0, 150)}...</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-lg opacity-70">No news found for this category.</p>
                        )
                    }
                </div>
            </div>

            <div className="hidden col-span-2 lg:block">
                <RightSideBar />
            </div>

        </div>
    );
};

export default NewsCategoryPage;