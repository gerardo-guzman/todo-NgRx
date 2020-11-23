import { Pipe, PipeTransform } from '@angular/core';
import { filterType } from '../filtro/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Todo[], filtro: filterType): Todo[] {
    switch (filtro) {
      case 'completados':
        return value.filter(item => item.completado);
      case 'pendientes':
        return value.filter(item => !item.completado);
      case 'todos':
        return value;
      default:
        return value;
    }
    
  }

}
