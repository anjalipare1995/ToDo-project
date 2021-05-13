import { Component } from '@angular/core';
import { Todo } from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoproject';

  todoValue: any;
  list: Todo[] = [];

  ngOnInit() {
    this.list = [];
    this.todoValue = "";
  }
  //add task
  addItem() {
    if (this.todoValue !== "") {
      const newItem: Todo = {
        //from interface todo.ts
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      //we need to push this new itom in to list Todo type of array

      this.list.push(newItem);
      //now i want to call value
      this.todoValue = "";
      //this is empty bcos when user enter value
      //and hit enter this value will be save not clear
      //in input box
    }
  }

  //delete task

  deleteItem(id: number) {
    //loop the item which not equle to this id
    this.list = this.list.filter(item => item.id !== id);
    //update this list using this.list.filter
    // filter is js method allow to call back here
    //loop all iton in list but just not 1 itom which delete

  }
  ///now we want to inject all this functionality in html
}



