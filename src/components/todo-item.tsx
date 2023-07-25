import React from 'react'
import { useAppDispatch } from '../hooks/redux-type'
import { removeTodo, toggleComplete } from '../store/todo-slice'

interface TodoItemProps {
  id: string,
  title: string,
  completed: boolean
}


const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch()

  return (
    <div className='w-full flex justify-between'>
      <div className='flex items-center gap-2'>
        <input type="checkbox" onChange={e => dispatch(toggleComplete(id))} />
        <p style={{ textDecoration: `${!completed ? 'line-through' : ''}` }}>{title}</p>
      </div>
      <div className='
      cursor-pointer
      p-[3px]
      rounded-sm
      flex
      items-center
      justify-center
      bg-red-400
      ' onClick={() => dispatch(removeTodo(id))}>x</div>
    </div>
  )
}

export default TodoItem