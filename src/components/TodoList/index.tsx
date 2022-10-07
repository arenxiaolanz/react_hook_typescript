import React, { FC, ReactElement, useCallback, useEffect, useState, useReducer } from 'react'
// FC function component 函数组件
import TdInput from './Input'
import TdList from './List'
import { ITodo, IState, ACTION_TYPE } from './typings'
import { todoReducer } from './reducer'

const initialState:IState = {
  todoList: []
}

const TodoList: FC = (): ReactElement => {
  // const [todoList, setTodoList] = useState<ITodo[]>([])

  // useReducer 可以减少useState的使用 ， 可以处理复杂逻辑
  const [state, dispatch] = useReducer(todoReducer, initialState)

  useEffect(() => {
    console.log("🚀 ~ file: index.tsx ~ line 13 ~ todoList", state.todoList)
  }, [state.todoList])


  const addTodo = useCallback((todo: ITodo) => {
    // console.log("🚀 ~ file: index.tsx ~ line 11 ~ addTodo ~ todo", todo)
    // setTodoList((todoList) => [...todoList, todo])
    dispatch({
      type: ACTION_TYPE.ADD_TODO,
      payload: todo
    })
    return todo
  }, [])

  return (
    <div className='todo-list'>
      <TdInput addTodo={addTodo} todoList={state.todoList}></TdInput>
      <TdList todoList={state.todoList}></TdList>
    </div>
  )
}

export default TodoList