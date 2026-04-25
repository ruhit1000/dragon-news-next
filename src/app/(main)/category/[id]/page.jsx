import LeftSidebar from '@/components/Homepage/LeftSideBar/LeftSidebar';
import NewsCard from '@/components/Homepage/NewsCard';
import RightSideBar from '@/components/Homepage/RightSideBar/RightSideBar';
import { getNewsByCategory } from '@/lib/data-fetch';
import React from 'react';

export const metadata = {
    title: "News Category - Dragon News",
    description: "Explore news articles categorized by topics on Dragon News. Stay informed with the latest updates and in-depth coverage across various categories, including politics, technology, sports, entertainment, and more."
}

const NewsCategoryPage = async ({ params }) => {

    const { id } = await params;

    const newsList = await getNewsByCategory(id);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 container mx-auto px-4 py-8">

            <div className="hidden col-span-3 lg:block">
                <LeftSidebar activeId={id} />
            </div>

            <div className="col-span-6">
                <h2 className="text-xl font-semibold mb-4 text-base-content">Dragon News Home</h2>
                <div className='space-y-4'>
                    {
                        newsList.status ? (
                            newsList.data.map(news => <NewsCard key={news._id} news={news} />)
                        ) : (
                            <p className="text-center text-lg opacity-70">No news found for this category.</p>
                        )
                    }
                </div>
            </div>

            <div className="hidden col-span-3 lg:block">
                <RightSideBar />
            </div>

        </div>
    );
};

export default NewsCategoryPage;