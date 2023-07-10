import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mychatbot';

  links = [
    {
      path:'/home',label:'home',active:'button-active'
    },
    {
      path:'/chat',label:'Chat',active:'button-active'
    },
    {
      path:'/signin',label:'Signin',active:'button-active'
    }
  ]
// links: any;
}
