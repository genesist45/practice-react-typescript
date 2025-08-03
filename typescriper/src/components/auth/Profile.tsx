export interface ProfileProps {
    name: string;
    // Ang prop nga 'name' kay expected nga string (base sa interface)
}

export function Profile({ name }: ProfileProps) {
    // Ang 'name' nga gi-destructure gikan sa props kay base gihapon sa ProfileProps

    return (
        <>
            <p>Your Profile Name: {name}</p>
            {/* 
                I-display sa browser ang value sa 'name' nga prop
                nga gi-pasa sa component (e.g., 'hunter' gikan sa Private)
            */}
        </>
    );
}
