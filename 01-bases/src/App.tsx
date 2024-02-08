import CounterBy from "./bases/ConterBy";
import Counter from "./bases/Counter";
import CounterEffect from './bases/CounterEffect';
import CounterHook from "./bases/CounterHook";
import CounterReducerComponent from "./counter-reducer/CounterReducerComponent";
// import CounterReducerComponent from "./bases/CounterReducerComponent";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter initialValue={15} />
      <CounterBy initialValue={5} />
      <CounterEffect initialValue={5} />
      <CounterHook />
      <CounterReducerComponent />
    </>
  );
}

export default App;
  