interface Props{
    children: React.ReactNode,

}

export default function StyledButton({children} : Props){
    return <button 
            className="bg-[#333F72] text-white text-lg rounded-tl-3xl rounded-br-3xl py-4 px-12 hover:cursor-pointer hover:scale-105 hover:bg-[#2a3459] transition-all duration-300 shadow-lg hover:shadow-xl">
                {children} 
            </button>
}