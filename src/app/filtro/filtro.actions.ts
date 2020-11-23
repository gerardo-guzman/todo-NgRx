import { createAction, props } from "@ngrx/store";

export type filterType = 'todos' | 'completados' | 'pendientes';


export const setFilter = createAction(
    '[FILTRO] Set Filtro',
    props<{filtro: filterType}>()
);

