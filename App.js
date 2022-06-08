import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Test from "./components/Test";
import Welcome from "./components/Welcome";

function App() {
  // const [name, setName] = useState('onur')

  const [count, setCount] = useState(5);

  const handleIncrease = () => {
    console.log("+");
    setCount(count + 1);
  };

  const handleDecrease = () => {
    console.log("-");
    setCount(count - 1);
  };

  return (
    <div className="App">
      <Test>Selamlar</Test>
      <Welcome name="Yavuz" surname="Mollahamzaoğlu" no="200207056" />

      <button onClick={handleIncrease}>+</button>
      <h1>{count}</h1>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
}

export default App;
