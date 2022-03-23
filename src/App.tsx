import "./App.css";

// import { useAppSelector, useAppDispatch } from "./redux/hooks";
import ProductCard from "./components/product-card/product-card";
import "rc-rate/assets/index.css";

function App() {
  // const count = useAppSelector(selectCount);
  // const dispatch = useAppDispatch();
  return (
    <div className="App">
      <ProductCard
        id={1}
        name="Hello asnc knsal nsalk nlksa nsal mkals lsa"
        imageUrl="https://thumbs.dreamstime.com/b/blue-shoes-29507491.jpg"
        rate={2}
        price={100}
      />
    </div>
  );
}

export default App;
