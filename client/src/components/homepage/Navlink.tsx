import { NavLink } from "react-router-dom";

interface Props{
    location: string,
    children: React.ReactNode
}

export default function Navlink({location, children} : Props){
    return(
        <NavLink 
        to={location}
        className={ ({ isActive }) =>
            `text-lg font-medium hover:-translate-y-1 transition-all duration-300 px-3 py-2 rounded-lg ${isActive ? "text-[#E56E0C] bg-orange-50" : "text-[#333F72] hover:text-[#E56E0C] hover:bg-gray-50"}`
        }
        >{children}</NavLink>
    )
}