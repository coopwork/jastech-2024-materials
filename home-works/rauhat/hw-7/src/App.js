import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ShopItem from "./components/ShopItem";
import { shopItems } from "./constants/shop-items";
import Counter from "./components/Counter";
import PasswordInput from "./components/PasswordInput";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="App">
      <h1>WORKING</h1>
      <Counter />
      <PasswordInput />
      <br />
      <Button onClick={() => setIsLoading(true)} isLoading={isLoading}>
        Start app
      </Button>

      <Button onClick={() => setIsLoading(false)}>End app</Button>

      {shopItems?.map((shopItem) => (
        <ShopItem key={shopItem.id} item={shopItem} />
      ))}
    </div>
  );
}

export default App;
