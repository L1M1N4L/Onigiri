import onigiri from "../../assets/ONIGIRI.svg"

export default function Navlogo(){
    return(
        <div className="border-4 border-[#333F72] rounded-full h-full aspect-square flex items-center justify-center hover:scale-110 hover:cursor-pointer transition-all">
            <img src={onigiri} alt="" className="w-2/3 h-2/3"/>
        </div>
    )
}