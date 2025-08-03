interface ReactNodeProps {
  children: React.ReactNode;
}

function ReactNode({ children }: ReactNodeProps) {
  return (
    <>
      {children}
    </>
  );
}

export default ReactNode;
