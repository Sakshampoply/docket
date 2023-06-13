import LogoFooter from "../LogoFooter";
import Navbar from "./Navbar";
import Link from "next/link";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import { signOut } from "next-auth/react";;

export default function App(props) {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session) router.push('/login')
    }, [router, session])

    const [hoverEffect, setHoverEffect] = useState(false);
    const { projects } = props;
    return <>
        <Navbar />
        <h1 className="px-36 text-3xl">Welcome, {session && session.user && session.user.name}</h1>
        <div className="flex p-16 justify-center items-center">
            {
                projects && projects.length > 0 ? projects.map(item => (
                    <Link href={`/our-team`} key={item.id}>
                        <button className="inline border-2 border-solid border-white hover:bg-black w-96 p-10 m-auto text-xl">
                            {item.p_name}{hoverEffect && item.desc}
                        </button>
                    </Link>
                )) : null
            }
        </div >
        <button onClick={signOut} className="border-2 border-solid border-white w-fit p-6 m-auto text-xl">SIGN-OUT</button>
        <LogoFooter />
    </>
}

export async function getStaticProps() {
    return {
        props: {
            projects: [
                {
                    id: "1",
                    p_name: "Drone",
                    desc: "A flying robot controlled using a controller created using a multiple electronic components.",
                    stat: true
                },
                {
                    id: "2",
                    p_name: "LFR",
                    desc: "A Line Following robot follows a manually created line created using IR sensors and BO motors.",
                    stat: false
                },
                {
                    id: "3",
                    p_name: "ChatBot",
                    desc: "An AI based application which generates responses to chats prompted from the user.",
                    stat: true
                }
            ]
        }
    }
}