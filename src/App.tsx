import React from "react";
import { Button } from "antd";
import "./App.css";
import { Hello } from "./Hello";
const App = () => {
  return (
    <div className="App">
      <Hello compiler="TypeScript" framework="React" />
      <Button type="primary">Button</Button>
    </div>
  );
};

export default App;
