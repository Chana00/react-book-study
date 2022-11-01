import TodoListItem from './TodoListItem';
import React from 'react';
import './TodoList.scss';

function TodoList() {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
}

export default TodoList;
