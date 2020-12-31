import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//This takes in HTML File (templateUrl)
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Bryan Romero';//Best Practice to assign a type
}
