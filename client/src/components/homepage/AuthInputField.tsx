interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string; 
}


export default function AuthInputField({label, name, type='text', value, placeholder='',required=false}:Props) {
    return(
        <>
            <div className="auth-input-field flex flex-col align-center justify-center font-medium text-sm">
            <label htmlFor={name} className="auth-label ps-3 text-[#395780]">{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                required={required}
                className="auth-input border-[1px] border-[#DBDBDB] max-w-sm min-h-10 rounded-lg ps-2 shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
            />
            </div>
        </>
    )
}