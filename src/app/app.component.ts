import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//This takes in HTML File (templateUrl)
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Bryan Romero';//Best Practice to assign a type

  constructor(){//This constructor works like any other constructor and it gets ran in App component initialization
    console.log("1 2 3");
    this.name = "Peter Griffin"; // This has to be a string because of the typescript defined   
  }
}
