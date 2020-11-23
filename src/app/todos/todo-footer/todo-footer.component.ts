import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filterType } from 'src/app/filtro/filtro.actions';
import { setFilter } from 'src/app/filtro/filtro.actions';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtro: filterType = 'todos';
  filtros: filterType[] = ['todos', 'completados', 'pendientes'];
  pendientes: number = 0;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    //this.store.select('filtro').subscribe(filtro => this.filtro = filtro);
    this.store.subscribe(state => {
      this.filtro = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    })
  }

  cambiarFiltro(filtro: filterType) {
    this.store.dispatch(setFilter({filtro}));
  }

  clearCompleted() {
    this.store.dispatch(clearCompleted());
  }

}
