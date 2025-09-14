import Navlink from "./Navlink"
import Navlogo from "./Navlogo"

export default function Navbar(){
    return(
        <div className="fixed w-full top-0 left-0 flex items-center justify-center z-50 py-4">
            <div className="bg-white/95 backdrop-blur-sm w-[90%] max-w-5xl h-16 rounded-xl shadow-lg border border-neutral-200 flex justify-evenly items-center px-4">
                <Navlink location="/home">Home</Navlink>
                <Navlink location="/menu">Menu</Navlink>
                <Navlogo/>
                <Navlink location="/about">About</Navlink>
                <Navlink location="/sessions">Sessions</Navlink>
            </div>
        </div>
    )
}