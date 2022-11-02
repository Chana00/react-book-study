import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState, useRef, useCallback } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 해보기",
      checked: true
    },
    {
      id: 3,
      text: "일정관리 앱 만들어 보기",
      checked: false
    },
  ])

  //고윳값으로 사용될 id
  //ref를 사용하여 변수 담기 ( 렌더링이 필요없기 때문 )
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };

      setTodos(todos => todos.concat(todo));
      nextId.current += 1;
    }, []
  )

  const onToggle = useCallback(
    id => {
      setTodos(
        todos =>
          todos.map(todo =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo,
          )
      )
    }, []
  )

  //id를 받으면 해당 id의 todo를 지운다
  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id))
    }, []
  )

  return <TodoTemplate>
    <TodoInsert onInsert={onInsert} />
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
  </TodoTemplate>
}

export default App;
