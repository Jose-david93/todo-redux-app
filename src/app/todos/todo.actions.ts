import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[TODO] Crear todo',
  props<{ texto: string }>()
);
export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const editar = createAction(
  '[TODO] Editar Todo',
  props<{ id: number; text: string }>()
);

export const borrar = createAction(
  '[TODO] Borrar Todo',
  props<{ id: number}>()
);

export const toggleAll = createAction(
  '[TODO] ToggleAll Todo',
  props<{ completado: boolean }>()
);

