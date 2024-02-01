import React from 'react';

const TodoList = ({
  todos,
  toggleTodo,
  removeTodo,
  startEdit,
  updateTodo,
  editingTodo,
  updatedTodo,
  setUpdatedTodo,
}) => {
  return (
    <ul className="text-left">
      {todos.map((todo, index) => (
        <li
          key={index}
          // className={`${
          //   todo.completed ? 'line-through text-gray-500' : ''
          // }`}
        >
          {editingTodo === todo.id ? (
            <div>
              <input
                type="text"
                value={updatedTodo}
                onChange={(e) => setUpdatedTodo(e.target.value)}
              />
              <button onClick={() => updateTodo()}>Save</button>
            </div>
          ) : (
            <span onClick={() => toggleTodo(todo.id)}>{todo.taskName}</span>
          )}
          <div>
            <button onClick={() => startEdit(todo.id, todo.text)}>Edit</button>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
