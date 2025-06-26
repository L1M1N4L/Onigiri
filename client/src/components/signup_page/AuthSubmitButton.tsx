interface Props{
    name: string;
}

export default function AuthSubmitButton({name}:Props){
    return(
        <button className="w-sm min-h-10 rounded-lg bg-[#254A7D] border-[1px] border-[#DBDBDB] shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-white" type="submit">
            {name}
        </button>
    )
}