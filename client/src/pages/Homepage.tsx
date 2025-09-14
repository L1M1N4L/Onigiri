import Navbar from "../components/homepage/Navbar"
import Hero from "../components/homepage/Hero"
import FeaturesSection from "../components/homepage/FeaturesSection"
import WhatMakesDifferent from "../components/homepage/WhatMakesDifferent"
import TestimonialsSection from "../components/homepage/TestimonialsSection"
import CTASection from "../components/homepage/CTASection"
import Footer from "../components/homepage/Footer"
import wave_section_bottom from "../assets/wave_section_bottom.svg"

export default function Homepage(){
    return(
        <div className="w-screen min-h-screen overflow-x-hidden">
            <Navbar/>
            <Hero/>
            <FeaturesSection/>
            <div className="relative">
                <img src={wave_section_bottom} className="absolute top-0 left-0 w-full h-auto z-0" />
                <div className="relative z-10">
                    <WhatMakesDifferent/>
                </div>
            </div>
            <TestimonialsSection/>
            <CTASection/>
            <Footer/>
        </div>
    )
}