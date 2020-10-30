import {ActionTypes} from './types';

export const addTodo = (note:string) => ({
    type:ActionTypes.ADD_TODO,
    payload:note
});

export const removeTodo = (id:number) => ({
    tpye:ActionTypes.REMOVE_TODO,
    payload:id
});

export const toggleTodo = (id:number) => ({
    type:ActionTypes.TOGGLE_TODO,
    payload:id
});