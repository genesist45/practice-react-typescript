import { Greet } from '../Greet';

// Use the same props type sa Greet by using React.ComponentProps<typeof Greet>
function CustomComponent(props: React.ComponentProps<typeof Greet>) {
  // Kini nga style allows reuse sa props type gikan sa Greet component
  return (
    <>
      <div>
        <h1>{props.name}</h1>
        <h1>{props.isCount}</h1>
        <h1>{props.isEmployed ? "Cooking" : "Not"}</h1>
      </div>
    </>
  );
}

export default CustomComponent;
