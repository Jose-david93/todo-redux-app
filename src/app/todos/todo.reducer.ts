import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { clearCompleted } from '../filtro/filtro.actions';
import { Todo } from './models/todo.model';
import { borrar, create, editar, toggle, toggleAll } from './todo.actions';

export const initialState: Todo[] = [new Todo('Salvar al mundo')];

export const todoReducer = createReducer(
  initialState,
  on(create, (state, { texto }) => [...state, new Todo(texto)]),
  on(borrar, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(clearCompleted, (state) => {
    return state.filter((todo) => !todo.completado);
  }),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(toggleAll, (state, { completado }) => {
    return state.map((todo) => {
      return { ...todo, completado };
    });
  }),
  on(editar, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: text,
        };
      } else {
        return todo;
      }
    });
  })
);
