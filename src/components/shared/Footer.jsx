import { getCategories } from '@/lib/data-fetch';
import Link from 'next/link';
import React from 'react';

const Footer = async () => {

    const categories = await getCategories();


    return (
        <footer className="bg-base-200 text-base-content">
            <div className="footer p-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <nav>
                    <h6 className="footer-title">Categories</h6>
                    {categories.map((category) => (
                        <Link
                            key={category.category_id}
                            href={`/category/${category.category_id}`}
                            className="link link-hover"
                        >
                            {category.category_name}
                        </Link>
                    ))}
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link href="/about-us" className="link link-hover">About Us</Link>
                    <Link href="/career" className="link link-hover">Careers</Link>
                    <Link href="/contact" className="link link-hover">Contact</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link href="/terms" className="link link-hover">Terms of Service</Link>
                    <Link href="/privacy" className="link link-hover">Privacy Policy</Link>
                    <Link href="/cookies" className="link link-hover">Cookie Policy</Link>
                </nav>
            </div>

            <div className="footer px-10 py-4 border-t border-base-300 max-w-7xl mx-auto">
                <aside className="items-center grid-flow-col">
                    <p>
                        <strong>Your News Brand</strong> <br />
                        Providing reliable news since {new Date().getFullYear()}
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        {/* Social Icons (SVG placeholders) */}
                        <a href="#" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;