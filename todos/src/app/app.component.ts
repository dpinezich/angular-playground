import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
      trigger('focusPanel', [
          state('inactive', style({
              transform: 'scale(1)'
          })),
          state('active',   style({
              transform: 'scale(1.1)'
          })),
          transition('inactive => active', animate('500ms ease-in')),
          transition('active => inactive', animate('500ms ease-out'))
      ]),

      trigger('itemEnter', [

          state('in', style({transform: 'translateY(0)'})),

          transition('void => *', [
              style({transform: 'translateY(-100%)', opacity: '0'}),
              animate('300ms ease-out')
          ]),
          transition('* => void', [
              animate('300ms ease-out', style({transform: 'scaleY(0) translateY(200px)'}))
          ])
      ]),

      trigger('note', [

          state('inactive', style({
              opacity: '0'
          })),
          state('active',   style({
              opacity: '1'
          })),
          transition('inactive => active', [
              animate(300, keyframes([
                  style({opacity: 0, transform: 'translateY(0)', offset: 0}),
                  style({opacity: 1, transform: 'translateY(-15px)',  offset: 0.6}),
                  style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
              ]))
          ]),
          transition('active => inactive', [
              animate(300, keyframes([
                  style({opacity: 1, transform: 'translateY(0)', offset: 0}),
                  style({opacity: 1, transform: 'translateY(-15px)',  offset: 0.7}),
                  style({opacity: 0, transform: 'translateY(100%)',     offset: 1.0})
              ]))
          ])
      ])
  ]
})
export class AppComponent {
  title = 'app works!';
  state: string = 'inactive';

  ourItems = [
      'Start the new app project',
      'Work on Blog',
      'Lunch at 1'
  ];

  submitItem(event) {
    this.ourItems.push(event.target.value);
    event.target.value = '';
  }

  removeItem(event, i) {
      this.ourItems.splice(i, 1);
  }

  toggleFocus() {
      console.log(this.state);
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }
}
