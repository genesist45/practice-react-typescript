interface ChildrenProps {
    children : number;
}

export const Heading = ({children} : ChildrenProps) => {
    return(
        <>
            <h1>{children}</h1>
        </>
    )
}
