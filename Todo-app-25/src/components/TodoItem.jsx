import React from 'react'

const TodoItem = ({ items }) => {
  console.log(items)
  return (
    <>
      {items.map((item) => (
        <div className="todo-item" >
          <input
            type="checkbox"
          />
          <p>{item}</p>
          <button>X</button>
        </div>
      ))}
    </>

  )
}

export default TodoItem
