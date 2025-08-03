interface StatusProps {
  status: 'success' | 'loading' | 'failed' | 'error';
}

// Nag-declare ta og interface nga 'StatusProps' para ma-define kung unsa lang ang pwede nga value sa 'status' prop.
// Ang 'status' prop kay dapat usa lang sa mga string values: 'success', 'loading', 'failed', o 'error'.
// Kung dili kini mosunod, mo-warning or mo-error si TypeScript.

function Status(props: StatusProps) {

  let message;

  if (props.status === "success") {
    message = "Successfully";
  }
  // Kung ang 'status' kay "success", i-assign nato ang string "Successfully" sa variable nga 'message'.

  else if (props.status === "loading") {
    message = "Loading";
  }
  // Kung ang 'status' kay "loading", ang 'message' mahimong "Loading".

  else if (props.status === "failed") {
    message = "Failure";
  }
  // Kung 'failed' ang status, then 'message' = "Failure".

  else {
    message = "Error";
  }
  // Kung wala sa above nga mga value, automatic mo-fallback sa "Error".

  return (
    <>
      <h1>{message}</h1>
      {/**
       * Gidisplay nato ang message gamit ang JSX — mo-render kini as text sulod sa <h1>.
       */}
    </>
  );
}

export default Status;
