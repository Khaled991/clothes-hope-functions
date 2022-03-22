import logo from "./logo.svg";
import "./App.css";

// import { useAppSelector, useAppDispatch } from "./redux/hooks";
import ProductCard from "./components/product-card/product-card";

function App() {
  // const count = useAppSelector(selectCount);
  // const dispatch = useAppDispatch();
  return (
    <div className="App">
      <ProductCard
        id={1}
        name="Hello"
        imageUrl="https://thumbs.dreamstime.com/b/blue-shoes-29507491.jpg"
        rate={2}
        price={100}
      />
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
