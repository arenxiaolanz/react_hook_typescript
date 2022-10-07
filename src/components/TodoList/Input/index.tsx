import React,{useRef, FC, ReactElement} from 'react'
// FC,function component 函数组件
import {ITodo} from '../typings'

interface IProps {
  addTodo : (todo: ITodo) => {}
  todoList: ITodo[]
}

// TdInput是一个FC并且所接受的参数是 IProps类型的
// （）：ReactElement  表示返回的是一个ReactElement东西
const TdInput: FC<IProps> = ({
  addTodo,
  todoList
}): ReactElement => { 
  const inputRef = useRef<HTMLInputElement>(null)

  const addItem = ():void => {
    const val:string = inputRef?.current!.value.trim()

    if(val.length){
      const isExist = todoList.find(todo => todo.content === val)
      if(isExist){
        alert('已存在该项')
        return
      }
      addTodo({
        id: new Date().getTime(),
        content: val,
        completed: false
      })
      inputRef.current!.value = ''
    }
  }

  return (
    <div className='todo_input'>
      <input ref={inputRef} type="text" placeholder="请输入代办项" />
      <button onClick={addItem}>增加</button>
    </div>
  )
}

/****
 * {
 *    id: number new Date().getTime()
 *    content: string
 *    completed: boolean  
 * }
 * 
 * 
 * 
 * 
 * 
 */

export default TdInput