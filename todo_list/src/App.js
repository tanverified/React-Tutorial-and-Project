import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [value, setvalue] = useState("");
  const [items, setitems] = useState([])
  const inputHandler = (e) => {
    setvalue(e.target.value);
  };

  const submitHandler = (val) =>{
    setitems([...value])
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-md-8 mx-auto mt-5">
          <h3 className="text-center">ToDo List</h3>
          <TodoInput value={value} inputHandler={inputHandler} submitHandler={submitHandler}/>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
