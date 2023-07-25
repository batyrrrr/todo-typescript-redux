import { useState } from 'react'

interface ITodos {
  id: number,
  title: string,
  completed: boolean,
}

const NewTodo = (title: string) => {
  const [todos, setTodos] = useState<ITodos[]>([])

  setTodos([...todos, {
    id: Date.now(),
    title,
    completed: false
  }])

  return {
    todos
  }
}

export default NewTodo