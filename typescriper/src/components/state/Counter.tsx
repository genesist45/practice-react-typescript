import { useReducer } from 'react'

// Mao ni ang state structure.
// Ang state nato kay object nga naay property nga `count`, ug ang value niya kay number.
interface CountState {
  count: number;
}

// UpdateAction: Para ni sa increment ug decrement actions.
// Kinahanglan nga naa siya'y type ('increment' or 'decrement') ug payload (number nga i-add or i-minus).
interface UpdateAction {
  type: 'increment' | 'decrement';
  payload: number;
}

// ResetAction: Para ni sa pag-reset sa count.
// Ang type niya kay 'reset' lang, walay payload.
interface ResetAction {
  type: 'reset';
}

// Gamit ta og `type` keyword para i-combine ang duha ka actions (UpdateAction ug ResetAction).
// Either ang dispatch mo send og increment/decrement (with payload), or reset.
type ActionState = UpdateAction | ResetAction;


// Kini ang reducer function. Mo-handle ni sa mga action nga i-dispatch.
// Parameters:
// - state: current state nga based sa CountState (dapat naa'y `count` nga number).
// - action: object nga either UpdateAction or ResetAction.
// Return type: CountState (so kinahanglan ang output kay object nga naay `count` nga number).
function reducer(state: CountState, action: ActionState):  CountState{
  switch (action.type) {
    case 'increment':
      // Kung type kay increment, i-add ang payload sa current count.
      return { count: state.count + action.payload };
    case 'decrement':
      // Kung type kay decrement, i-minus ang payload sa current count.
      return { count: state.count - action.payload };
    case 'reset':
      // Kung reset, i-set lang ang count balik sa 0.
      return { count: 0 };
    default:
      // Kung walay match, i-return lang ang current state (fallback).
      return state;
  }
}

function Counter() {

    // Initial state sa ato counter — ang count magsugod sa 0.
    const initialState = { count: 0 }

    // useReducer returns:
    // - state: mao ni ang current value sa state.
    // - dispatch: function nga mo-trigger sa reducer gamit ang action.
    const [state, dispatch] = useReducer(reducer, initialState)

    // Function para mo-dispatch og increment action (with payload 10).
    const handleIncrement = () => {
        dispatch({ type: 'increment', payload: 10 })
    }

    // Function para mo-dispatch og decrement action (with payload 10).
    const handleDecrement = () => {
        dispatch({ type: 'decrement', payload: 10 })
    }

    // Function para mo-dispatch og reset action (wala'y payload).
    const handleReset = () => {
        dispatch({ type: 'reset'}) 
    }

    return (
        <>
            {/* Buttons para trigger sa dispatch functions */}
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
            {/* Display current count state */}
            <p>Stats: {state.count}</p>
        </>
    )
}

export default Counter
