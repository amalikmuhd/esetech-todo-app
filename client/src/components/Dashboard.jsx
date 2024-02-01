import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import API from '../services/API';

const Dashboard = () => {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [updatedTodo, setUpdatedTodo] = useState('');

  const logOut = async () => {
    try {
      const response = await localStorage.removeItem('token');
      window.location = '/';
    } catch (error) {}
  };

  const getTodos = async () => {
    try {
      const response = await API.get('notes/getAllNotes');
      if (response.data?.message === 'success') {
        setTodos(response?.data?.data);
      }
      setTodos(response?.data?.data);
    } catch (error) {}
  };

  useEffect(() => {
    getTodos();
  }, []);

  // addTodo locally
  const addTodo = async () => {
    const payload = { taskName: newTodo };
    if (newTodo.trim() !== '') {
      try {
        const response = await API.post('notes/addNote', payload);
        console.log(response?.data, 'add noto to the database');
      } catch (error) {
        console.log(error?.response?.data, 'checkuing');
      }
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // removing task locally
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Editing the task
  const startEdit = (id, text) => {
    setEditingTodo(id);
    setUpdatedTodo(text);
  };

  const updateTodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editingTodo ? { ...todo, text: updatedTodo } : todo
      )
    );
    setEditingTodo(null);
    setUpdatedTodo('');
  };

  return (
    <div>
      <h2>Add todo list</h2>

      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2" onClick={() => addTodo()}>
        Add Todo
      </button>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        startEdit={startEdit}
        updateTodo={updateTodo}
        editingTodo={editingTodo}
        updatedTodo={updatedTodo}
        setUpdatedTodo={setUpdatedTodo}
      />

      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default Dashboard;
