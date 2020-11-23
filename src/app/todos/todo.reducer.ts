import { createReducer, on } from "@ngrx/store";
import { Todo } from './models/todo.model';
import { clearCompleted, crearTodo, deleteTodo, editText, toggle, toggleAll } from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Salvar al mundo')
]

const _todoReducer = createReducer(initialState,
    on(crearTodo, (state, {texto}) => [... state, new Todo(texto) ] ),
    on(toggle, (state, {id}) => {
        return state.map( item => {
            if (item.id === id) {
                return {
                    ...item,
                    completado: !item.completado
                }
            } else {
                return item;
            }
            
        })
    }),
    on(editText, (state, {text, id}) => {
        return state.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    texto: text
                }
            } else {
                return item;
            }
        })
    }),
    on(deleteTodo, (state, {id}) => {
        return state.filter(item => item.id !== id);
    }),
    on(toggleAll, (state, {completado}) => {
        return state.map(item => {
            return {
                ...item,
                completado
            }
        })
    }),
    on(clearCompleted, (state) => state.filter(item => !item.completado)),
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}