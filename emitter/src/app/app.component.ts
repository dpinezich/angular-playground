import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  getNotification(evt) {
    alert(evt);
    // Do something with the notification (evt) sent by the child!
  }
}

