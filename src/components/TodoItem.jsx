import React from 'react';
import '../styles/TodoItem.css';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          <span className="checkmark"></span>
        </label>
        <p className="todo-text">{todo.text}</p>
      </div>
      <button 
        className="delete-button" 
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete task"
      >
        ×
      </button>
    </div>
  );
}

export default TodoItem;