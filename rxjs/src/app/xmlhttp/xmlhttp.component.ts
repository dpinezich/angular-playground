import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-xmlhttp',
  templateUrl: './xmlhttp.component.html',
  styleUrls: ['./xmlhttp.component.css']
})
export class XmlhttpComponent implements OnInit {

  values = ""

  ngOnInit() {
    let output = document.getElementById('output');
    let button = document.getElementById('button');

    let click = Observable.fromEvent(button, 'click');

    function load(url: string) {
      return Observable.create(observer => {

        let xhr = new XMLHttpRequest();

        xhr.addEventListener('load', () => {
          let data = JSON.parse(xhr.responseText);
          observer.next(data);
          observer.complete();
          });

        xhr.open('GET', url, true);
        xhr.send();
      });
    }

    function renderMovies(movies) {
      console.log(movies);
        const div = document.createElement('div');
        div.innerHTML = movies.Title;
        output.appendChild(div);
    }

    click.flatMap(
        e => load('http://www.omdbapi.com/?t=' + this.values))
        .subscribe(
            renderMovies,
            e => console.log(`error: ${e}`),
            () => console.log('complete')
    );

  }

}
