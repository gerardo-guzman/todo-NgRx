import { ActionReducerMap } from '@ngrx/store';
import { filterType } from './filtro/filtro.actions';
import { filterReducer } from './filtro/filtro.reducer';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';

export interface AppState {
    todos: Todo[],
    filtro: filterType
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filterReducer
}

