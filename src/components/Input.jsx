import React , {useId} from 'react';

const Input = React.forwardRef(function Input({children,
    type = "text",
    label,
    className = "",
    ...props

}, ref) {
    
    const Id = useId();

    return(
        <div>
            {label && <label className='inline-block mb-1 pl-1'
                        htmlFor={Id}>
                            {label}
                        </label>}
                        <input type={type} id = {Id}
                        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                        ref = {ref}
                        {...props}>

                        </input>
        </div>
    )
})

export default Input;
