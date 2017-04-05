import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'my-app',
  template: `
  <button [@hitMe]="state" (click)="changeState()">someButton</button>
  <br /><br />
  <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
	<div class="flipper">
		<div class="front">
    <img [src]="image">
		</div>
		<div class="back">
    <img [src]="image2">
		</div>
	</div>
</div>`,
  styles: ['button { margin-top: 200px; margin-left: 200px; }'],
  animations: [
    trigger('hitMe', [
      state('inactive', style({
        backgroundColor: '#eee',
        background: 'linear-gradient(45deg, pink, turquoise)',
        transform: 'scale(1) rotate(20deg)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(5)',
        background: 'linear-gradient(45deg, blue, green)'

      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class AppComponent  { 
  name = 'Angular'; 
  state: string = 'inactive';
  image: string = 'https://placebear.com/200/300';
  image2: string = 'https://placebear.com/250/350';

changeState() {
  console.log("t");
  this.state = (this.state === 'inactive' ? 'active' : 'inactive');
}

}
