import { ActionReducerMap } from '@ngrx/store';
import { filtroReducer } from './filtro/filter.reducer';
import { filtrosValidos } from './filtro/filtro.actions';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';

export interface AppState {
  todos: Todo[];
  filter: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filtroReducer,
};
