import AboutUs from "./AboutUs"
import Footer from "./Footer"

export default function HomePage() {
    return <>
        <hr className="flex mx-16 my-12 leading-4 h-4 bg-white"></hr >
        <h1 className="flex mx-16 my-52 text-4xl font-bold">A Project Managment Web Application</h1>
        <h1 className="block mx-16 my-52 text-right text-8xl font-bold">.doc(KET)</h1>
        <hr className="flex mx-16 my-12 leading-4 h-4 bg-white"></hr >
        <h1 className="block mx-16 my-8 text-left text-6xl font-bold">.doc(KET)</h1>
        <AboutUs />
        <Footer />
    </>
}