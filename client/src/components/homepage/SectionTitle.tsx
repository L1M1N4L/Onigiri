interface Props{
    children: React.ReactNode,
    className: string,
}

export default function SectionTitle({children, className} : Props){
    return <h1 className={`text-center text-2xl md:text-4xl font-semibold ${className}`}>{children}</h1>
}