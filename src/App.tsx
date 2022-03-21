import logo from "./logo.svg";
import "./App.css";

// import { useAppSelector, useAppDispatch } from "./redux/hooks";

function App() {
  // const count = useAppSelector(selectCount);
  // const dispatch = useAppDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <h1>{count}</h1>

        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          increment by 5
        </button> */}
      </header>
    </div>
  );
}

export default App;
