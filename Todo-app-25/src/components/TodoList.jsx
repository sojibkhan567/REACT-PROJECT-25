import React, { useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  //const items = ['mango', 'banana'];
  const [items, setItems] = useState(['mangoes', 'banana']);

  const handleAddBtn = (event) => {
    if (event.key === "Enter") {
      let newItem = event.target.value;

      let newItems = [...items, newItem];

      setItems(newItems);
    }
  }
  return (
    <div className="todo-list">
      <TodoItem items={items} />
      <input
        type='text'
        onKeyDown={handleAddBtn}
      />
    </div>
  )
}

export default TodoList
