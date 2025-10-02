import onigiri from "../../assets/ONIGIRI.svg"


export default function Navlogo(){
    return(
        <div className="flex items-center gap-3 hover:cursor-pointer group">
            <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-all">
                <img src={onigiri} alt="Onigiri" className="w-full h-full"/>
            </div>
            <span className="text-2xl font-bold text-[#333F72]">Onigiri</span>
        </div>
    )
}