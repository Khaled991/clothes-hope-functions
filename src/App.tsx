import "./App.css";

// import { useAppSelector, useAppDispatch } from "./redux/hooks";
import ProductCard from "./components/product-card";

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
    </div>
  );
}

export default App;
