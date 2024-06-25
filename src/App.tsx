import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const promise = new Promise((res) => {
        setTimeout(() => {
          res(1);
        }, 3000);
      });

      const res = await promise;
      console.log(res);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  return (
    <div className="App">
      <Button
        counter={true}
        focused={true}
        size={56}
        colorStyle={"primary"}
        onClick={handleClick}
        isLoading={isLoading}
        label="Что сделать"
      >
        <Button.Counter colorStyle="primary" size={8} stroke={false}>
          123
        </Button.Counter>
      </Button>
    </div>
  );
}

export default App;
