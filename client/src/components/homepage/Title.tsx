export default function Title({children} : {children: React.ReactNode}){
    return <h1 className="text-[#333F72] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-full max-w-4xl text-center leading-tight">{children}</h1>
}