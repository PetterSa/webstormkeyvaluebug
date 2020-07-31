import { Component } from '@angular/core';

interface WithContent {
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webstormkeyvaluebug';
  aPrettyMap: Map<string, WithContent> = new Map();

  constructor() {
    this.aPrettyMap.set('TheFirstValue', {content: 'Interesting content'});
    this.aPrettyMap.set('TheSecondValue', {content: 'Lorem Ipsum'});
  }
}
