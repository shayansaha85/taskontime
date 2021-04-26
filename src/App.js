import logo from "./logo.svg";
import "./App.css";
import Header from "./my_components/Header";
import { Todos } from "./my_components/Todos";
import { Footer } from "./my_components/Footer";
import { AddTodo } from "./my_components/AddTodo";
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
      setTodos(todos.filter( (e) => {
        return e!==todo;
      }))
      localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title) => {
    let sno;
    if(todos.length===0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    
    const myTodo = {
      sno: sno,
      title: title
    }
    setTodos([...todos, myTodo]);

   
      
  }
  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
      <Header title="TaskOnTime" />

      <Switch>
          <Route path="/" render={() => {
            return (
            <>
            <AddTodo addTodo = {addTodo}/>
            <Todos todos = {todos} onDelete={onDelete}/>
            </>
            )
          }}>
          </Route>  
          
        </Switch>

      
      <Footer />
    </Router>
    </>
  );
}

export default App;
