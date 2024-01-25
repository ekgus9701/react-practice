import React, { useCallback, useState } from 'react';
import TodoList from './TodoList';

const COLOR_MAP = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'white' },
  { color: 'yellow' },
];

export default function TodoApp() {
    const [inputText, setInputText] = useState('');
    const [activeColor, setActiveColor] = useState(COLOR_MAP[0].color);
    const [incrementCount, setIncrementCount] = useState(3);
  
    const [todoList, setTodoList] = useState([
      {
        id: 1,
        title: 'todo-1',
        color: 'red',
      },
      {
        id: 2,
        title: 'todo-2',
        color: 'blue',
      },
    ]);
  
    const deleteTodo = useCallback((todoId) => {
      setTodoList((prev) => prev.filter((todo) => todo.id !== todoId));
    }, [setTodoList]);
  
    const updateTodo = useCallback(
      (todoId, newTitle) => {
        setTodoList((prev) =>
          prev.map((todo) =>
            todo.id === todoId ? { ...todo, title: newTitle } : todo
          )
        );
      },
      [setTodoList]
    );
  
    return (
      <div className="todo-app">
        {/* ... (previous code) */}
  
        <div>
          <TodoList
            todoList={todoList}
            onDelete={deleteTodo}
            onUpdate={updateTodo} // Pass the updateTodo function
          />
        </div>
      </div>
    );
  }