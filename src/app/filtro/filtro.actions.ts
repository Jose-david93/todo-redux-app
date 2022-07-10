import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';
export const setFilter = createAction(
  '[Filtro] Set Filtro',
  props<{ filtro: filtrosValidos }>()
);
export const clearCompleted = createAction('[Filtro] Clear Complete');
