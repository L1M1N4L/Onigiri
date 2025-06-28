import Navbar from "../components/homepage/Navbar"
import Hero from "../components/homepage/Hero"
import SectionContainer from "../components/homepage/SectionContainer"
import SectionTitle from "../components/homepage/SectionTitle"
import wave_section_bottom from "../assets/wave_section_bottom.svg"

export default function Homepage(){
    return(
        <div className="bg-[#faf5ef] w-screen h-auto overflow-hidden">
            <Navbar/>
            <Hero/>
            <SectionContainer className="bg-[#333F72]">
                <SectionTitle className="text-white">Lorem Ipsum Dolor</SectionTitle>
            </SectionContainer>
            <SectionContainer className="relative">
                <img src={wave_section_bottom} className="absolute -top-1" />
                <SectionTitle className="text-[#333F72] mt-52">Lorem Ipsum Dolor</SectionTitle>
            </SectionContainer>
        </div>
    )
}