import { Action, createReducer, on } from '@ngrx/store';
import { setFilter, filtrosValidos, clearCompleted } from './filtro.actions';

export const initialState: filtrosValidos = 'todos';

export const filtroReducer = createReducer<filtrosValidos,Action>(
  initialState,
  on(setFilter, (state, { filtro }) => filtro)
);
