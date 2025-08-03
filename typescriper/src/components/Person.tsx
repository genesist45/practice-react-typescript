// Nag-declare ta og interface nga 'Person' 
// Ang purpose ani is para ma-define ang structure sa props nga ipasa sa component
// Ang props dapat naay: name (string), age (number), og isEmployed (boolean)
interface PersonProps {
    name : string;
    age : number;
    isEmployed : boolean;
}

// Kani nga function component kay gitawag pud og 'Person'
// Nagdawat siya og props nga nagsunod sa interface nga 'Person'
// Mao ni ang format sa functional component sa React nga naggamit og TypeScript
function Person (props : PersonProps) {
    return(
        <>
            {/* Gidisplay nato ang values nga naa sa props */}
            <p>{props.name}</p>           {/* Ipakita ang name */}
            <p>{props.age}</p>            {/* Ipakita ang age */}
            <p>{props.isEmployed}</p>     {/* Ipakita kung employed ba (true/false) */}
        </>
    )
}

// Gi-export nato ang component para magamit sa lain nga file
export default Person
