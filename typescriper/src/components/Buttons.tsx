interface ButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
  /**
   * Kani nga interface `ButtonProps` kay type structure sa props nga gamiton sa `Button` component.
   * Ang `handleClick` nga prop kay usa ka function nga naay duha ka parameter:
   * - `event`: React mouse event gikan sa button
   * - `id`: number nga identifier lang
   * - `=> void` pasabot ani kay wala ni siya nag return og value (void = walay balik nga output).
   * Tawag ani nga function type: "function type with typed parameters and return type".
   */
}

function Button(props: ButtonProps) {
  // Nagkuha ta og props gikan sa parent component.
  // Ang prop nga gigamit diri kay `handleClick`.

  return (
    <>
      <button onClick={(event) => props.handleClick(event, 123)} className="btn btn-primary">Click Me!</button>
      {/**
       * Kung i-click ang button, mo trigger ang `onClick`.
       * Sulod sa onClick kay arrow function nga mo tawag sa `props.handleClick`.
       * Gipasa ang `event` ug ang number nga `123` isip parameter.
       * Sa parent component, kadtong handleClick function kay mo-receive sa event ug id, unya i-console.log to niya.
       * Mao na makita nato ang event object ug ang number nga 123 sa console.
       */}
    </>
  )
}

export default Button
