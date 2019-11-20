import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tp1Angular';
  seance = 'Seance TP1';
  resume = 'Prise en main d\'Angular, première séance';
  isAuth : boolean = false;
  
  constructor() { 
      setTimeout( () =>{this.isAuth = true;}, 10000);
  }
}
