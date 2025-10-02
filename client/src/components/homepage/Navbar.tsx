import Navlink from "./Navlink"
import Navlogo from "./Navlogo"
import GetStartedButton from "./Getstarted"
export default function Navbar(){
    return(
        <nav className="fixed w-full top-0 left-0 bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-50">
            <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
                <div className="flex-shrink-0">
                    <Navlogo/>
                </div>
                
                <div className="flex items-center gap-8">
                    <Navlink location="/home">Home</Navlink>
                    <Navlink location="/features">Features</Navlink>
                    <Navlink location="/pricing">Pricing</Navlink>
                    <Navlink location="/about">About</Navlink>
                    <GetStartedButton/>
                </div>
            </div>
        </nav>
    )
}