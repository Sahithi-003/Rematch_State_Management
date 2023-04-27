import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "./store";
import { RematchRootState } from "@rematch/core";
import { RootModel } from "./models/model";
import { useState } from "react";
import TodosList from "./TodoList";

function App() {
  const count = useSelector<RematchRootState<RootModel>, any>(
    (state) => state.counter
  );

  const dispatch = useDispatch<Dispatch>();
  const [localCount, setLocalCount] = useState(0);
  const handleFetchTodos = () => {
    dispatch.todos.fetchTodos();
  };
  return (
    <div className="App" key={count}>
      <div>
        <h1>{localCount}</h1>
        <div>
          <button
            onClick={() => {
              dispatch.counter.increment(1);
              setLocalCount(count.count);
            }}
          >
            Increment
          </button>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              dispatch.counter.decrement(1);
              setLocalCount(count.count);
            }}
          >
            Decrement
          </button>
        </div>
        <button style={{ marginTop: "10px" }} onClick={handleFetchTodos}>
          Fetch Tasks
        </button>
        <TodosList />
      </div>
    </div>
  );
}

export default App;
