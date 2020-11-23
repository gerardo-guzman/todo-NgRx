import { createAction, props } from "@ngrx/store";



export const crearTodo = createAction(
    '[TODO] crea todo',
    props<{ texto: string }>()
);

export const toggle = createAction(
    '[TODO] toggle todo',
    props<{id: number}>()
);

export const editText = createAction(
    '[TODO] edit todo',
    props<{text: string, id: number}>()
);

export const deleteTodo = createAction(
    '[TODO] delete todo',
    props<{id: number}>()
);

export const toggleAll = createAction(
    '[TODO] delete todo',
    props<{completado: boolean}>()
);

export const clearCompleted = createAction(
    '[TODO] clear todo',
);