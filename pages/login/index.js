import { signIn, useSession } from "next-auth/react"
import { useEffect } from "react";
import Router, { useRouter } from "next/router";

export default function LoginPage() {

    const { data: session } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (session) router.push('/app')
    }, [session, router])

    return <>
        <hr className="flex mx-16 my-12 leading-4 h-4 bg-white"></hr >
        <h1 className="block mx-16 my-8 text-left text-6xl font-bold">.doc(KET)</h1>
        <div className="justify-items-center text-center">
            <button onClick={signIn} className="border-2 border-solid border-white w-96 p-10 m-auto mt-48 mb-4 text-4xl font-bold">LOGIN</button>
            <h1>New to .doc(KET)?</h1>
            <p>Register with Google</p>
        </div>
    </>
}