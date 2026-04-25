import React from 'react';
import Form from 'next/form';

const NewsLetterForm = () => {
    const handleSubmit = async (formData) => {
        'use server';
        const email = formData.get('email'); 
        console.log("Subscribed:", email);
    }

    return (
        <Form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto" action={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full text-base-content"
                required
            />
            <button type="submit" className="btn btn-error">Subscribe</button>
        </Form>
    );
};

export default NewsLetterForm;