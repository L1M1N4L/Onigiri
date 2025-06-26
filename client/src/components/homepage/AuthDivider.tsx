interface Props{
prompText: string,
linkText: string;
}

export default function AuthDivider({prompText, linkText}:Props){
    return(
        <div>
            <div className="flex items-center justify-center">
                <hr className="flex-grow border-t border-[#8CA6C9]"></hr>
                <span className="mx-2 text-sm text-[#395780]">Or</span>
                <hr className="flex-grow border-t border-[#8CA6C9]"></hr>
            </div>

            <p className="text-[#395780]">
                {prompText} 
            <a className="text-[#3365AD]">
                &nbsp;{linkText}
            </a>
            </p>
        </div>
    )
}