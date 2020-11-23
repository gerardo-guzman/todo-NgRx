import { createReducer, on } from '@ngrx/store';
import { filterType, setFilter } from './filtro.actions';



export const initialState: filterType = 'todos';

const _filterReducer = createReducer(initialState,
    on(setFilter, (state, {filtro}) => filtro),
);

export function filterReducer(state, action) {
    return _filterReducer(state, action);
}
