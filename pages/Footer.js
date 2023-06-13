import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Link from 'next/link';

export default function Footer() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return <>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center m-16" data-aos="fade-up">
            <div className="w-full float-right">
                <hr className="bg-white h-0.5"></hr>
                <h1 className="block mx-16 my-8 text-left text-6xl font-bold">.doc(KET)</h1>
                <p className='mt-32'>©.doc(KET) | 2023</p>
            </div>
            <div className="w-full float-left">
                <Link href={"/"}><button className="flex border-2 border-solid border-white w-full p-6 text-2xl">About Us</button></Link>
                <Link href={"/login"}><button className="flex border-2 border-solid border-white w-full p-6 text-2xl">Login or Register</button></Link>
                <Link href={"/our-team"}><button className="flex border-2 border-solid border-white w-full p-6 text-2xl">Our Team</button></Link>
            </div>
        </div>
    </>
}