import { Profiler, Suspense } from 'react';
import { Counter } from './Counter';
import { Loading } from './Loading';
import { FetchImages } from './FetchImages';
import { UseReducerCounter } from './UseReducerCounter';
import { UseReducerUser } from './UseReducerUser';
import { UseRefHook } from './UseRefHook';
import { UseImperativeHandleHook } from './UseImperativeHandleHook';
import { Chat } from './Chat';
import { ChatProvider } from './context/ChatContext';

import './styles.css';

export default function App() {
  function onRenderProfiler(
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number,
    startTime: number
  ): void {
    console.log(id, phase, actualDuration, baseDuration, startTime);
  }

  return (
    <div className="App">
      <section className="card">
        <h1>Profiler</h1>

        <Profiler id="Counter" onRender={onRenderProfiler}>
          <Counter />
        </Profiler>
      </section>

      <section className="card">
        <h1>Suspense</h1>
        <Suspense fallback={<Loading />}>
          <FetchImages />
        </Suspense>
      </section>

      <section className="card">
        <h1>useReducer</h1>
        <UseReducerCounter />
        <UseReducerUser />
      </section>

      <section className="card">
        <h1>useRef</h1>
        <UseRefHook />
      </section>

      <section className="card">
        <h1>useImperativeHandle</h1>
        <Profiler id="useImperativeHandle" onRender={onRenderProfiler}>
          <UseImperativeHandleHook />
        </Profiler>
      </section>

      <section className="card">
        <h1>useContext + use-context-selector</h1>
        <h1>ChatGPT v2</h1>
        <Chat />
      </section>
    </div>
  );
}
