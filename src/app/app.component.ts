import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-directives2-app';

someRandomVariable=false;
public color="red";
public colors=["red","blue","green","yellow"];


constructor(){
  setInterval(()=>{
  this.someRandomVariable=!this.someRandomVariable
  },1000);
}
}
