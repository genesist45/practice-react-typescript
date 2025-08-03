// Nag-declare ta og type para sa Horizontal positions nga possible strings ra
type HorizontalPosition = 'left' | 'center' | 'right'

// Same ra ni, pero para sa vertical direction (top to bottom)
type VerticalPosition = 'top' | 'center' | 'bottom'

/*
  Gusto nato maghimo og all possible combinations sa horizontal ug vertical position 
  gamit ang template literal types. So example:
    - "left - top"
    - "center - bottom"
    - "right - center"
  Pero dili nato gusto ma-allow ang "center - center" kay redundant siya.

  So ang buhaton nato:
    1. `${HorizontalPosition} - ${VerticalPosition}`: 
       → mag-generate ni og tanan combinations sa horizontal ug vertical strings
    2. Exclude<..., 'center - center'>: 
       → tangtangon nato ang specific string nga 'center - center' sa list.
    3. | 'center': 
       → pwede pud ang single string nga 'center' lang as a valid position.

  In short: valid ang mga like "left - top" or "center", pero dili ang "center - center"
*/
type Position = Exclude<`${HorizontalPosition} - ${VerticalPosition}`, 'center - center'> | 'center'

// Kini nga interface kay para sa props nga i-accept sa Toast component
interface ToastProps {
  position: Position // Ang 'position' dapat mo-follow sa rules sa Position type
}

// Functional component nga mag-display sa position value
function Toast({ position }: ToastProps) {
  return (
    <>
      <div>
        Toast Notification Position - {position}
      </div>
    </>
  )
}

export default Toast
