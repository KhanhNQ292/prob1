import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prob1';

  items: any[] = [];

  newTask : String = ''; 
  // complete: any = document.getElementsByTagName("li");
  
  toggle = true;
  status = "";

  addToList(): void {
    this.items.push(this.newTask);
    this.newTask = '';
  }

  removeFromList(): void {
    this.items.shift();
  }

  completed(): void {
    this.toggle = !this.toggle;
    this.status = this.toggle ? "" : "Complete";
  }
}
