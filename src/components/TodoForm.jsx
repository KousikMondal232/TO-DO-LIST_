import { useState } from 'react';
import '../styles/TodoForm.css';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!value.trim()) {
      setError('Please enter a task');
      return;
    }
    
    addTodo(value);
    setValue('');
    setError('');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (error && e.target.value.trim()) {
      setError('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          className={`todo-input ${error ? 'error' : ''}`}
          value={value}
          onChange={handleChange}
          placeholder="Add a new task..."
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default TodoForm;