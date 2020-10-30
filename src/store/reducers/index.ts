import {todosReducer} from './todos';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
    todosReducer
})


export type RootState = ReturnType<typeof rootReducer>;