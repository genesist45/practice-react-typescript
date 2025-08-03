

// Define interface for props
interface GreetProps {
  name: string;
  isCount?: number;       // Optional property using '?'
  isEmployed: boolean;
}

// Greet component
export function Greet({ name, isCount, isEmployed }: GreetProps) {
  return (
    <>
      {/* Display name prop */}
      <p>Name: {name}</p>

      {/* Display isCount prop. Since optional, may be undefined. */}
      <p>Count: {isCount}</p>

      {/* Conditional rendering for boolean value */}
      <p>Employed: {isEmployed ? "Yes" : "No"}</p>
    </>
  )
}
