interface Props{
    children: React.ReactNode,
    className: string,

}

export default function SectionContainer({children, className} : Props){
    return(
        <section className={`w-full h-auto flex items-center justify-center p-12 ${className}`}>
            {children}
        </section>
    )
}