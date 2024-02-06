import CounterBy from "./bases/ConterBy";
import Counter from "./bases/Counter";
import CounterEffect from './bases/CounterEffect';
import CounterHook from "./bases/CounterHook";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter initialValue={15} />
      <CounterBy initialValue={5} />
      <CounterEffect initialValue={5} />
      <CounterHook />
    </>
  );
}

export default App;
  