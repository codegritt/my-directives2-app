import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-directives2-app';

someRandomVariable=false;

constructor(){
  setInterval(()=>{
  this.someRandomVariable=!this.someRandomVariable
  },1000);
}
}
