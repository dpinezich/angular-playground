import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  sendNotification() {
    this.notifyParent.emit('Some value to send to the parent');
  }

  ngOnInit() {
  }
}

