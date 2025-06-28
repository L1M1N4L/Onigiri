import wave_pattern from "../../assets/wave_pattern.svg"
import Title from "./Title"
import Subtitle from "./Subtitle"
import StyledButton from "./StyledButton"
import onigiri_illustration from "../../assets/onigiri_illustration.svg"
import wave_section from "../../assets/wave_section.svg"

export default function Hero(){
    return(
        <div 
        className="w-screen h-screen bg-repeat bg-contain relative overflow-hidden"
        style={{backgroundImage: `url(${wave_pattern})`}}>
            <div className="w-full h-full max-w-6xl m-auto p-4 flex flex-col gap-8 justify-center items-center relative z-10 overflow-hidden">
                <Title>JLPT prep that's <br/> simply ir-rice-istible!</Title>
                <Subtitle>
                    Learning Japanese should be fun, and at Onigiri, it is! Whether you're prepping for the JLPT or just leveling up, our interactive lessons and personalized tools make study time something you’ll actually crave. Join us and turn Japanese into your favorite daily snack!
                </Subtitle>
                <StyledButton>Join Now</StyledButton>
            </div>
            <img src={wave_section} className="w-full object-cover absolute -bottom-1 z-2" />
            <img src={onigiri_illustration} className="w-2/3 absolute left-75 -bottom-100 opacity-40" />
        </div>
    )
}