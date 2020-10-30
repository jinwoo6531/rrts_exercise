import { ActionTypes } from './../actions/types';


export type Todo = {
    id:number,
    text:string,
    isToggle:boolean,
}
export type Todos = Todo[];

export const initialState:Todo[] = [
    {
        id:0,
        text: 'typesctip todolist',
        isToggle: false,
    },
    {
        id:1,
        text: 'typesctip redux',
        isToggle: false,
    }
]

type IAdd = {
    type:ActionTypes.ADD_TODO,
    payload:string
}
type IRemove = {
    type:ActionTypes.REMOVE_TODO,
    payload:number
}
type IToggle = {
    type:ActionTypes.TOGGLE_TODO,
    payload:number
}

export type TodoappAction = IAdd | IRemove | IToggle
 

export const todosReducer = (state:Todos=initialState,action:TodoappAction):Todos => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            const id = Math.max(...state.map(todo => todo.id)) + 1;
            return state.concat({
                id,
                text:action.payload,
                isToggle:false,
            });
        case ActionTypes.REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload);
            
        case ActionTypes.TOGGLE_TODO:
            return state.map(todo => 
                todo.id === action.payload
                ? {
                    ...todo,
                    isToggle: !todo.isToggle
                }
                :todo
                );
        default:
            return state;
    }

}