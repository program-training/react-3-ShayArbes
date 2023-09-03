import { useState, useEffect } from "react";
import { User } from "../interfaces/interface/users";
import { interfaceTodoList } from "../interfaces/interface/ToDoList";
interface prop {
  task:interfaceTodoList[];
} 
import Todo from "../TodoList/TodoList";



function UserCard(user: User):JSX.Element {
    const [todos, setTodos] = useState<interfaceTodoList[]>([]);
     
    const fetchTodos = async () => {
      if(todos.length > 0)
      {setTodos([]);
      return}
      try {
        const db = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`)
        const arrDb = await db.json();
        console.log(arrDb);
        setTodos(arrDb);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

   
 
    return (
      <div className="card m-3 col-3 p-3 " onClick={fetchTodos}>
        <h3>{user.username}</h3>
        <p>{user.email}</p>
        {todos.length > 0  && <Todo task={todos} />}
        
        
      </div>
    );
  }
  export default UserCard


  
  