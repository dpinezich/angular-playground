import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mousevent',
  templateUrl: './mousevent.component.html',
  styleUrls: ['./mousevent.component.css']
})
export class MouseventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let circle = document.getElementById("circle");
    let source = Observable.fromEvent(document, 'mousemove')
    .map((e: MouseEvent) => {
      return {
        x: e.clientX,
        y: e.clientY
      };
    })
        .filter(value => value.x < 500)
        .delay(300);


    function onNext(value) {
      console.log(value.x);
      circle.style.left = value.x + 'px';
      circle.style.top = value.y + 'px';
    }

    source.subscribe(
        //value => console.log(value),
        onNext,
        e => console.log(`error: ${e}`),
        () => console.log('complete')
    );

  }

}
