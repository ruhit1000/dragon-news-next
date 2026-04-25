import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 text-center font-sans text-base-content">
            <h1 className="text-9xl font-black opacity-70">404</h1>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Headline Not Found
            </h2>

            <p className="mt-4 text-lg opacity-70 max-w-md">
                We could not find the story you are looking for. It might have been pulled from the press, moved, or never existed.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    href="/"
                    className="btn btn-neutral"
                >
                    Back to Frontpage
                </Link>

                <Link
                    href="/categories"
                    className="btn btn-outline"
                >
                    Browse Categories
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;