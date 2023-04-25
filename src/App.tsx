import './App.css';
import TodoInputForm from './components/TodoInputForm';
import TodoList from './components/TodoList';
import TodoProvider from './context/TodoProvider';

function App() {
  return (
   <TodoProvider>
     <TodoInputForm/>
     <TodoList/>
   </TodoProvider>
  );
}

export default App;
