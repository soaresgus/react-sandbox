import { useReducer } from "react";

interface IState {
  name: string;
  address: string;
  zip: string;
  age: number;
}

type Action =
  | { type: "updateName"; name: string }
  | { type: "updateAddress"; address: string }
  | { type: "updateZip"; zip: string }
  | { type: "incrementAge" }
  | { type: "decrementAge" };

function reducer(state: IState, action: Action) {
  switch (action.type) {
    case "updateName":
      return {
        ...state,
        name: action.name
      };
    case "updateAddress":
      return {
        ...state,
        address: action.address
      };
    case "updateZip":
      return {
        ...state,
        zip: action.zip
      };
    case "incrementAge":
      return {
        ...state,
        age: state.age + 1
      };
    case "decrementAge":
      return {
        ...state,
        age: state.age - 1
      };

    default:
      return state;
  }
}

export function UseReducerUser() {
  const [{ name, address, zip, age }, dispatch] = useReducer(reducer, {
    name: "",
    address: "",
    zip: "",
    age: 0
  });

  return (
    <div className="reducer">
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <p>Zip: {zip}</p>
      <p>Age: {age}</p>

      <input
        type="text"
        className="input"
        placeholder="Name"
        onChange={(event) =>
          dispatch({ type: "updateName", name: event.target.value })
        }
      />

      <input
        type="text"
        className="input"
        placeholder="Address"
        onChange={(event) =>
          dispatch({ type: "updateAddress", address: event.target.value })
        }
      />

      <input
        type="text"
        className="input"
        placeholder="ZIP"
        onChange={(event) =>
          dispatch({ type: "updateZip", zip: event.target.value })
        }
      />

      <div className="reducer__buttons">
        <button
          className="button"
          onClick={() => dispatch({ type: "incrementAge" })}
        >
          + Age
        </button>

        <button
          className="button"
          onClick={() => dispatch({ type: "decrementAge" })}
        >
          - Age
        </button>
      </div>
    </div>
  );
}
