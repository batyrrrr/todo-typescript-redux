import React, { useState } from 'react'
import Input from './ui/input'
import Button from './ui/button'
import { AiOutlinePlus } from 'react-icons/ai'
import TodoList from './todo-list'
import { useAppDispatch } from '../hooks/redux-type'
import { addTodo } from '../store/todo-slice'

const TodoContent = () => {

  const [text, setText] = useState<string>('')
  const dispatch = useAppDispatch()


  const handleAction: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (text.trim().length) {
      dispatch(addTodo(text))
    }

  }



  return (
    <div className='flex flex-col justify-center   rounded-md shadow-md p-3 bg-gray-300 min-w-[400px]'>
      <h1 className='font-bold text-2xl mb-4'>Todo App</h1>
      <div className='flex items-center w-full gap-2 mb-3'>
        <Input placeholder='Добавить новый' onChange={e => setText(e.target.value)} />
        <Button onClick={handleAction} bgColor='purple'><AiOutlinePlus className='text-white' /></Button>
      </div>
      <TodoList />
    </div>
  )
}

export default TodoContent