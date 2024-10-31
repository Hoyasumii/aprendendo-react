import { useRecoilState } from "recoil";
import countState from "./states/count";

function App() {
  const [count, setCount] = useRecoilState<number>(countState);
  return <>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>  
  </>;
}

export default App;
