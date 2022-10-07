import React, { FC ,ReactElement} from 'react'
import TdItem from './Item'
import { ITodo } from '../typings'

interface IProps {
  todoList: ITodo[]
}

const TdList:FC<IProps> = ({todoList}):ReactElement => {
  return (
    <div className='todo_list'>
      <TdItem todoList={todoList}/>
    </div>
  )
}

export default TdList