import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";

import { CounterProvider } from "./Count-provider";

function App() {
  return (
    <CounterProvider>
      <div className="App">


        <div className="container my-3">
          <div className="row">
            <div className="col-6 offset-md-3">
              <h3>Context</h3>
              <Counter></Counter>
            </div>
          </div>
        </div>
      </div>
    </CounterProvider>
  );
}

export default App;
