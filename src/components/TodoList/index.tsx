import React from 'react'
import TdInput from './Input'
import TdList from './List'

const TodoList = () => { 
  return (
    <div className='todo-list'>
      <TdInput></TdInput>
      <TdList></TdList>
    </div>
  )
}

export default TodoList