// Define an interface for the Container component props.
// The `style` prop must follow the structure of React.CSSProperties.
interface ContainerProps {
  style: React.CSSProperties
}

// Functional component that accepts `props` based on the ContainerProps interface.
function Container(props: ContainerProps) {
  return (
    <>
      {/* Apply the passed style object to the paragraph using props.style */}
      <p style={props.style}>This is Style!</p>
    </>
  )
}

export default Container