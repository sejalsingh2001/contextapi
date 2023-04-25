import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoProvider'
import { TodoContextType } from '../Todo.types';
const TodoList=()=>{
    const {todo,DeleteItem}=useContext(TodoContext) as TodoContextType;
  return (
    <>
      <ul id="ul">
                  {todo.map((todo) => {
                    return (
                     <li>
                          {todo.todo}
                          <button
                            className="Del"
                            onClick={() => DeleteItem(todo.id)}
                          >
                            X
                          </button>
                        </li>
                    );
                  })}
        </ul>
 
    </>
  )
}
export default TodoList;