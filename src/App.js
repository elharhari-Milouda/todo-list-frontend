import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import GetTodoList from "./components/GetTodoList";
import Template from "./components/Template";
import { useEffect, useState } from "react";
import SignIn from "./components/signIn";

function App() {
  // const [todoList, setTodoList] = useState([]);
  // useEffect(() => {
  //   async function fetchTodoList() {
  //     try {
  //       const requestUrl = "http://localhost:8080/task/personal";
  //       const response = await fetch(requestUrl, { method: "GET" });
  //       const responseJSON = await response.json();
  //       console.log(responseJSON);
  //       setTodoList(responseJSON);
  //       console.log("**********");
  //     } catch (e) {
  //       console.log("//////////");
  //       console.log(e);
  //     }
  //   }
  //   fetchTodoList();
  // }, []);

  return (
    // <div className="todo-app">
    //  <TodoList />
    // </div>
    // <div className="App">
    //   <GetTodoList todoList={todoList} />
    // </div>
    <div className="todo-app">
      <Template />
    </div>
  );
}

export default App;
