import React from "react";
import { useState,useContext } from "react";
import { TodoContext } from "../context/TodoProvider";
import { TodoContextType } from "../Todo.types";

const TodoInputForm = () => {
  const { AddItem } = useContext(TodoContext) as TodoContextType;
  const [todoItem, setTodoItem] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todoItem) {
      return;
    }
    const newTodo = {
      id: Math.random(),
      todo: todoItem,
    };
    AddItem(newTodo);
    setTodoItem("");
  };
  return (
    <div className="main-content">
      <div className="title">
        <p>Todo List</p>
      </div>

      <div className="box">
        <div className="box1">
          <form onSubmit={handleSubmit}>
            <i>
              <input
                type="text"
                id="input"
                name="caption"
                placeholder="        What needs to be done ?"
                value={todoItem}
                autoComplete="off"
                onChange={(e) => setTodoItem(e.target.value)}
              />
            </i>
          </form>
        </div>
      </div>
    </div>
  );
};
export default TodoInputForm;
