import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 text-center font-sans">
            <h1 className="text-9xl font-black text-gray-200">404</h1>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Headline Not Found
            </h2>

            <p className="mt-4 text-lg text-gray-600 max-w-md">
                We could not find the story you are looking for. It might have been pulled from the press, moved, or never existed.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    href="/"
                    className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-offset-2 transition-colors"
                >
                    Back to Frontpage
                </Link>

                <Link
                    href="/categories"
                    className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
                >
                    Browse Categories
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;