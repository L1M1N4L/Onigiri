import { NavLink } from "react-router-dom";

export default function GetStartedButton(){
    return(
        <NavLink 
            to="/signup"
            className="text-lg font-semibold bg-[#E56E0C] text-white px-6 py-2.5 rounded-lg hover:bg-[#d46310] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
        >
            Get Started
        </NavLink>
    )
}