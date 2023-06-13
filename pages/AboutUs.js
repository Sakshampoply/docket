import AOS from 'aos';
import "aos/dist/aos.css";
import Link from 'next/link';
import { signIn, useSession } from "next-auth/react"
import { useEffect } from "react";
import Router, { useRouter } from "next/router";

export default function AboutUs() {

    const { data: session } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (session) router.push('/app')
    }, [session, router])

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return <>
        <div className="grid grid-cols-1 md:grid-cols-2" data-aos="fade-up">
            <div className="mx-16 text-center">
                <Link href={"/login"}><button className="border-2 border-solid border-white w-96 p-10 m-auto mt-28 text-2xl font-bold">LOGIN</button ></Link>
                <button onClick={signIn} className="border-2 border-solid border-white w-96 p-10 m-auto mt-10 mb-28 text-2xl font-bold">REGISTER</button>
            </div>
            <div className="mx-16">
                <h1 className="flex text-4xl font-bold p-4">What's .doc(KET)?!</h1>
                <div className="border-2 border-solid border-white p-4">
                    <p className="p-4">Created by Saksham Poply for the purpose of showcasing web development skills and as a portfolio building project</p>

                    <p className="p-4">This Web app tracks your progress over a Project. By counting the total number of tasks in the a Project and the number of tasks completed .doc(KET) gives you a detailed analysis of your project status</p>

                    <p className="p-4">.doc(KET) uses many technologies for its development, namely HTML5 for basic structure and initializing of the web pages, Tailwind CSS a CSS library used for adding styles, Node.js for server side programming and managment of modules and packages, Express.js a package used for database connection with MongoDB, Next.js a React.js library to create efficient and fast Web applications.</p>
                </div>
            </div>
        </div >
    </>
}