import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import InputForm from "./components/InputForm";
import Title from "./components/Title";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
