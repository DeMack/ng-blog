import { Component } from '@angular/core';

import { Blog } from './blog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blog = { id: 'id1', title: 'TestPost', body: 'Test body', date: new Date(), tags: ['testTag1', 'testTag2'] };
  title = 'app';
}
