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
            `text-xl hover:-translate-y-1 transition-all ${isActive ? "text-[#E56E0C]" : "text-[#333F72]"}`
        }
        >{children}</NavLink>
    )
}