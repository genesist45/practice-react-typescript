import { useRef, useEffect, useState } from 'react'

const MutableRef = () => {
  // 👉 Gamit ta og `useState` para sa timer
  // - Ang initial value kay `0`, so automatic ang type is `number`
  // - Wala na tay kinahanglan i-specify nga `: number` kay ma-infer na
  const [timer, setTimer] = useState(0)

  // 👉 Gamit ta og `useRef` para i-store ang ID sa interval
  // - Ang type structure ani kay `number | null`:
  //   • `number` = kung nagdagan ang timer (gikan sa `setInterval`)
  //   • `null` = kung wala pa or gi-stop ang timer
  const intervalRef = useRef<number | null>(null)

  // 👉 Function para mo-stop sa timer
  const stopTimer = () => {
    // Check kung naay sulod ang `intervalRef.current`
    if (intervalRef.current) {
      // I-clear nato ang interval gamit ang ID
      window.clearInterval(intervalRef.current)

      // Optional pero good practice: i-reset nato ang ref to null
      intervalRef.current = null
    }
  }

  // 👉 useEffect para automatic mo-run ang timer once lang pag mount sa component
  useEffect(() => {
    // I-set ang interval ug i-save ang ID sa `intervalRef`
    intervalRef.current = window.setInterval(() => {
      // Update ang timer kada 1 second
      setTimer((prevTimer) => prevTimer + 1)
    }, 1000)

    // Cleanup function: mo-stop sa timer kung i-unmount ang component
    return () => {
      stopTimer()
    }
  }, []) // Empty dependency = run once lang (on mount)

  return (
    <>
      <div>
        HookTimer = {timer}
        <br />
        {/* Pag-click ani nga button, mohunong ang timer */}
        <button onClick={stopTimer}>Stop Timer</button>
      </div>
    </>
  )
}

export default MutableRef
