import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewLesson1Component } from "./new-lesson1/new-lesson1.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewLesson1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
}
