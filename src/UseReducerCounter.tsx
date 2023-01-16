import { useReducer } from "react";

interface IState {
  counter: number;
}

interface IAction {
  type: "increment" | "decrement";
}

function reducer(state: IState, action: IAction) {
  console.log(state, action);
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1
      };
    case "decrement":
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
}

export function UseReducerCounter() {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0
  });

  function increment() {
    dispatch({ type: "increment" });
  }

  function decrement() {
    dispatch({ type: "decrement" });
  }

  return (
    <div className="reducer">
      <h3>Count: {state.counter}</h3>
      <div className="reducer__buttons">
        <button className="button" onClick={increment}>
          +
        </button>
        <button className="button" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
}
