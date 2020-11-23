import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { deleteTodo, editText, toggle } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputFisico') txtFisico: ElementRef;
  checkCompletado: FormControl;
  txtEdit: FormControl;
  editando = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkCompletado = new FormControl(this.todo.completado);
    this.txtEdit = new FormControl(this.todo.texto, Validators.required);
    this.checkCompletado.valueChanges.subscribe( valor => {
      this.store.dispatch(toggle({id: this.todo.id}));
    })
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtFisico.nativeElement.select();
    }, 1);

  }

  terminarEdicion() {
    this.editando = false;
    if (this.txtEdit.invalid || this.txtEdit.value === this.todo.texto) {
      return;
    }
    this.store.dispatch(editText({
      id: this.todo.id,
      text: this.txtEdit.value
    }));
  }

  deleteTodo() {
    this.store.dispatch(deleteTodo({
      id: this.todo.id
    }));
  }

}
