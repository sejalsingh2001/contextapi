import { createContext, useState } from "react";
import { Todo } from "../Todo.types";
import { TodoContextType } from "../Todo.types";

type TodoContextProviderProps = {
  children: React.ReactNode;
};

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider = ({ children }: TodoContextProviderProps) => {
  const [todo, setTodo] = useState<Todo[]>([]);

  const AddItem = (newTodoItem: Todo) => {
    setTodo([...todo, newTodoItem]);
  };

  const DeleteItem = (todoIndex: number) => {
    const updatedTodo = [...todo].filter((todo) => todo.id !== todoIndex);
    setTodo(updatedTodo);
  };

  return (
    <TodoContext.Provider value={{ todo, AddItem, DeleteItem }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
