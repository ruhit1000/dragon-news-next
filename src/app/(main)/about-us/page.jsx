import NewsLetterForm from '@/components/ui/NewsLetterForm';
import React from 'react';

export const metadata = {
    title: "About Us - Dragon News",
    description: "Learn more about Dragon News, our mission, vision, and core values. Discover how we are committed to delivering accurate and impactful journalism to our readers."
}

const AboutUsPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 text-base-content">
            {/* Hero Section */}
            <section className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About Dragon News</h1>
                <p className="text-lg opacity-80 max-w-3xl mx-auto">
                    We are an independent, global news organization dedicated to uncovering the truth. 
                    Since our founding, we have been committed to fearless, accurate, and impactful journalism.
                </p>
            </section>

            {/* Mission & Vision */}
            <section className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-base-200 p-8 rounded-box">
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="opacity-80 leading-relaxed">
                        To provide the public with the facts they need to understand the world, through independent 
                        reporting that holds the powerful accountable and gives voice to the marginalized.
                    </p>
                </div>
                <div className="bg-base-200 p-8 rounded-box">
                    <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                    <p className="opacity-80 leading-relaxed">
                        A world where informed citizens are empowered by accurate, accessible, and in-depth journalism 
                        that bridges divides and fosters global understanding.
                    </p>
                </div>
            </section>

            {/* Core Values */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-base-100 border border-base-300 p-6 rounded-box hover:shadow-lg transition-all">
                        <div className="text-error text-3xl mb-4">⚖️</div>
                        <h3 className="text-xl font-bold mb-2">Integrity</h3>
                        <p className="opacity-70">We adhere to the highest ethical standards of journalism, prioritizing honesty and fairness above all else.</p>
                    </div>
                    <div className="bg-base-100 border border-base-300 p-6 rounded-box hover:shadow-lg transition-all">
                        <div className="text-error text-3xl mb-4">🔍</div>
                        <h3 className="text-xl font-bold mb-2">Accuracy</h3>
                        <p className="opacity-70">Our reporting is rigorous and fact-based. We verify every detail before it reaches our readers.</p>
                    </div>
                    <div className="bg-base-100 border border-base-300 p-6 rounded-box hover:shadow-lg transition-all">
                        <div className="text-error text-3xl mb-4">🕊️</div>
                        <h3 className="text-xl font-bold mb-2">Independence</h3>
                        <p className="opacity-70">We operate free from corporate, political, or financial influence to bring you the unvarnished truth.</p>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="bg-neutral text-neutral-content p-8 md:p-12 rounded-box text-center">
                <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
                <p className="opacity-90 max-w-2xl mx-auto mb-8">
                    Join thousands of readers who trust Dragon News for their daily dose of uncompromised journalism.
                </p>
                <NewsLetterForm />
            </section>
        </div>
    );
};

export default AboutUsPage;