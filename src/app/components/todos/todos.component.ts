import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',//This is the name of the html tag we use to call this component. <app-todos></app-todos> not <app-todos/>
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor() { }//Constructor is used to import services

  ngOnInit(): void {//Lifecycle method kind like component did mount
  }

}
