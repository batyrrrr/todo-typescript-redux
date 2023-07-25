import { useAppSelector } from '../hooks/redux-type'
import TodoItem from './todo-item'

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.list)
  console.log('todos', todos)

  return (
    <div className='w-full'>
      <ul className='flex flex-col gap-2'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList