import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flipkart-clone';

  login(){
    console.log("Logged in");
  }

  more(){
    console.log("clicked on more");
  }
}
