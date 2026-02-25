import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-lesson1',
  imports: [FormsModule],
  templateUrl: './new-lesson1.component.html',
  styleUrl: './new-lesson1.component.css'
})


export class NewLesson1Component {
  taskName:string="java"
  newTask:string=""
  name:string="Hodaya"
  updateTask(){
  this.taskName=this.newTask
  this.newTask=""
  // flag:Boolean=true
}
}
