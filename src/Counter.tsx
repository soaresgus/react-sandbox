import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button className="button" onClick={() => setCount((state) => state + 1)}>
        +1
      </button>
    </div>
  );
}
