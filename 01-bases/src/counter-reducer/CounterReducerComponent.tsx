import { useReducer } from "react";
import { CounterStateComponent } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
import * as CounterActions from "./actions/actions";

const INITIAL_STATE: CounterStateComponent = {
  counter: 10,
  previous: 6,
  changes: 1,
};

const CounterReducerComponent = () => {
  const [CounterStateComponent, dispatch] = useReducer(
    counterReducer,
    INITIAL_STATE,
  );

  const handleReset = () => {
    dispatch(CounterActions.doReset());
  };

  const increaseBy = (value: number) => {
    dispatch(CounterActions.doIncreaseBy(value));
  };

  return (
    <>
      <h1>Counter Reducer Segmentado:</h1>
      <p>{JSON.stringify(CounterStateComponent, null, 2)}</p>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
    </>
  );
};

export default CounterReducerComponent;
