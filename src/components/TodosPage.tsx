import React, {FC, useEffect, useState} from "react";
import { ITodo } from "../types/types";
import axios from "axios";
import List from "./List";
import TodoItem from "./TodoItem";

const TodosPage: FC = () => {

    const[todos, setTodo] = useState<ITodo[]>([])

  useEffect(() => {
        fetchTodo();
  }, [])

  

  async function fetchTodo() {
    try{
          const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
          setTodo(response.data)
    } catch(e){
          alert(e);
    }
  }

    return(
        <List item={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
    )
}

export default TodosPage