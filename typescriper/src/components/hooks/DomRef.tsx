import {useEffect, useRef} from 'react'

function DomRef () {
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        inputRef.current?.focus()
        console.log("Typing")
    }, [])
    return(
        <>
            <input 
                ref={inputRef}
                type = 'text'
                placeholder = "Enter Here.."
            />
        </>
    )
}

export default DomRef