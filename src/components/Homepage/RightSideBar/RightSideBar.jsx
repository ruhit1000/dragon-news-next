import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from 'react-icons/pi';
import swimming from '@/assets/swimming.png';
import classImg from '@/assets/class.png'
import playground from '@/assets/playground.png';
import SocialLogIn from '@/components/ui/SocialLogIn';

const RightSideBar = () => {
    return (
        <div className='space-y-6'>
            <SocialLogIn />

            <div className='space-y-2'>
                <h2 className="text-lg font-semibold mb-4 text-base-content">Find Us On</h2>
                <button className="btn w-full bg-blue-600 text-white border-blue-600">
                    <FaFacebook /> Facebook
                </button>
                <button className="btn w-full bg-purple-600 text-white border-purple-600">
                    <PiInstagramLogoFill /> Instagram
                </button>
                <button className="btn w-full bg-blue-400 text-white border-blue-400">
                    <FaTwitter /> Twitter
                </button>
            </div>

            <div className='bg-base-300 p-2 rounded-lg space-y-2'>
                <h2 className="text-lg font-semibold mb-4 text-base-content">Q-Zone</h2>
                <button className='cursor-pointer hover:rotate-3 duration-300 transition-all'>
                    <Image src={swimming} alt="Swimming" />
                </button>
                <button className='cursor-pointer hover:rotate-3 duration-300 transition-all'>
                    <Image src={classImg} alt="Class" />
                </button>
                <button className='cursor-pointer hover:rotate-3 duration-300 transition-all'>
                    <Image src={playground} alt="Playground" />
                </button>
            </div>
        </div>
    );
};

export default RightSideBar;