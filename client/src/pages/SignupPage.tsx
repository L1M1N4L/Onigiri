import LeftPanel from "../components/signup_page/LeftPanel"
import RightPanel from "../components/signup_page/RightPanel"

export default function SignupPage(){
    return(
        <>
            <div className="w-screen min-h-screen bg-[#faf5ef]" style={{backgroundImage: `url('../assets/wave_pattern.svg')`}}>
                <div className="flex flex-col lg:flex-row min-h-screen">
                    <LeftPanel />
                    <RightPanel />
                </div>
            </div>
        </>
    )
}
