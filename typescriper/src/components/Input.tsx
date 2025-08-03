interface InputProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

function Input(props: InputProps) {
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    };

    // Pwede pud nato gamiton ni nga handleChangeInput nga function,
    // nga usa ka arrow function. Ang iyang parameter kay `event`
    // nga type `React.ChangeEvent<HTMLInputElement>`.
    //
    // Sa sulod niya, ato lang gi-console.log ang event, pero wala siya
    // nag-gamit sa `props.handleChange` nga gikan sa parent.
    //
    // Sa interface sa taas (`InputProps`), ang `handleChange` nga prop
    // kay gi-declare nga function nga modawat pud og event.
    //
    // Pero sa karon nga setup, wala nato gigamit ang `props.handleChange`.
    // Instead, atong gibutang sa `onChange` sa input kay ang local function
    // nga `handleChangeInput`. So technically, wala pa gigamit ang
    // `handleChange` nga gikan sa props.

    return (
        <>
            <input 
                type="text"
                placeholder="Enter Something..."
                value={props.value}
                onChange={handleChangeInput}
            />
            {/**
             * Ang function nga `handleChangeInput` gi-assign nato sa `onChange` event sa input.
             * Pero wala siya nag-call sa `props.handleChange`, mao nga di pa ni siya gamit
             * kung gusto nimo mogamit sa parent function.
             *
             * Kung gusto nimo gamiton ang function nga gikan sa parent (props.handleChange),
             * pwede nimo direkta isulat:
             * 
             * onChange={props.handleChange}
             *
             * O kaha sa sulod sa `handleChangeInput`, imo siyang tawagon:
             * 
             * props.handleChange(event)
             */}
        </>
    );
}

export default Input;
