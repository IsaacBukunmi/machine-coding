import React, { useState } from 'react';

function TodoList() {
  const [todoInput, setTodoInput] = useState("")
  const [todoList, setTodoList] = useState([])

  const handleAddTodo = () => {
    if (todoInput === "") {
      return
    }
    setTodoList((prev) => [...prev, {
      id: Date.now(),
      text: todoInput,
      completed: false
    }])
  }

  const handleDeleteTodo = (id) => {
    const filteredTodoList = todoList.filter((td) => td.id !== id)
    setTodoList(filteredTodoList)
  }

  const handleCheckedTodo = (todo) => {
    const checkedTodoItem = todoList.map((tdItem) => {
      if (todo.id === tdItem.id) {
        return{
          ...tdItem,
          completed: !todo.completed
        }
      }
      return tdItem
    })

    setTodoList(checkedTodoItem)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div className="add-todo-form">
        <input
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Enter todo"
        />
        <button onClick={() => handleAddTodo()}>Add</button>
      </div>
      <ul>
        {
          todoList.map((todo) => {
            return (
              <li key={todo.id}>
                <input type="checkbox" onChange={() => handleCheckedTodo(todo)} checked={todo.completed} />
                <span className={`todo-text ${todo.completed ? "completed" : ""}`}>{todo.text}</span>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default TodoList;