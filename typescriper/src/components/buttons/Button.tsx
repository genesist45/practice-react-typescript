type ButtonProps = {
  variant: 'primary' | 'secondary';
  children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>;
// Explanation:
// - Ang type nga `ButtonProps` kay nag require og:
//   - `variant`: string nga pwede lang either 'primary' or 'secondary'.
//   - `children`: string nga mo-represent sa button label.
// - Gamit ta og `Omit<React.ComponentProps<'button'>, 'children'>`
//   para mo-inherit tanan default props sa native `<button>` element,
//   EXCEPT sa `children` (kay ato man gi-declare na).

function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <>
      <button className={`class-with-${variant}`} {...rest}>
        {children}
      </button>
      {/**
       * Sa sulod sa <button>:
       * - Ang `className` gigamit og template string para mag-depend sa `variant`.
       *   So kung variant kay 'primary', mahimong `class-with-primary`.
       * - Ang `{...rest}` means tanang other props (e.g. `onClick`, `disabled`, etc.)
       *   gi-apply sa button gamit spread operator.
       * - `{children}` mao ang button text (e.g. "Primary Button").
       */}
    </>
  );
}

export default Button;
