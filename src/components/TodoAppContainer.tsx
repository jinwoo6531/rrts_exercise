import React from 'react'
import TodoApp from './TodoApp';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';


const TodoAppContainer = () => {
    const todos = useSelector((state: RootState) => state.todosReducer);
    return (
        <TodoApp todos={todos}/>
    )
}

export default TodoAppContainer
