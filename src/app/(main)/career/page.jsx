import React from 'react';

const CareerPage = () => {
    const jobListings = [
        {
            title: "Senior Investigative Reporter",
            department: "Editorial",
            location: "New York, NY",
            type: "Full-time"
        },
        {
            title: "Photojournalist",
            department: "Photography",
            location: "Remote / Global",
            type: "Contract"
        },
        {
            title: "Full Stack Engineer",
            department: "Technology",
            location: "San Francisco, CA / Remote",
            type: "Full-time"
        },
        {
            title: "Digital Content Editor",
            department: "Digital Media",
            location: "London, UK",
            type: "Full-time"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 text-base-content">
            {/* Hero Section */}
            <section className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Groundbreaking Team</h1>
                <p className="text-lg opacity-80 max-w-2xl mx-auto">
                    At Dragon News, we believe in the power of truth and storytelling. 
                    Join us in our mission to deliver fearless journalism to the world.
                </p>
            </section>

            {/* Why Work With Us */}
            <section className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-base-200 p-6 rounded-box text-center shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                    <p className="opacity-80">Your work will reach millions of readers worldwide, shaping public discourse.</p>
                </div>
                <div className="bg-base-200 p-6 rounded-box text-center shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Creative Freedom</h3>
                    <p className="opacity-80">We support bold ideas and independent thinking across all our departments.</p>
                </div>
                <div className="bg-base-200 p-6 rounded-box text-center shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Benefits</h3>
                    <p className="opacity-80">Competitive salary, health care, matching 401(k), and flexible time off.</p>
                </div>
            </section>

            {/* Openings */}
            <section>
                <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
                <div className="space-y-4">
                    {jobListings.map((job, index) => (
                        <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-base-100 border border-base-300 rounded-box hover:shadow-md transition-shadow">
                            <div>
                                <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                                <div className="opacity-70 text-sm flex flex-wrap gap-4">
                                    <span>{job.department}</span>
                                    <span>&bull;</span>
                                    <span>{job.location}</span>
                                    <span>&bull;</span>
                                    <span>{job.type}</span>
                                </div>
                            </div>
                            <button className="btn btn-error text-white mt-4 md:mt-0">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CareerPage;