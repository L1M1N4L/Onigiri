import Navbar from "../components/homepage/Navbar"
import Hero from "../components/homepage/Hero"

export default function Homepage(){
    return(
        <div className="bg-[#faf5ef] w-screen h-auto">
            <Navbar/>
            <Hero/>
        </div>
    )
}