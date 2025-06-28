import Navlink from "./Navlink"
import Navlogo from "./Navlogo"

export default function Navbar(){
    return(
        <div className="fixed w-full h-32 flex items-center justify-center z-100">
            <div className="bg-white w-[90%] max-w-5xl h-16 rounded-xl shadow-sm border border-neutral-200 flex justify-evenly items-center">
                <Navlink location="/home">Home</Navlink>
                <Navlink location="/menu">Menu</Navlink>
                <Navlogo/>
                <Navlink location="/about">About</Navlink>
                <Navlink location="/sessions">Sessions</Navlink>
            </div>
        </div>
    )
}