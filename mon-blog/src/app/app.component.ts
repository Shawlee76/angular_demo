import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon Premier Blog 2.0';

  posts = [
    {
      title: 'Mon Premier Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      hits: 5,
      created : new Date(2018, 8, 2, 15, 50, 0)
    },
    {
      title: 'Mon Deuxième Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      hits: -3,
      created : new Date(2018, 7, 3, 10, 55, 5)
    },
    {
      title: 'Encore un autre Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      hits: 0,
      created : new Date(2018, 6, 4, 5, 0, 10)
    },
    {
      title: 'Enfin un dernier',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      hits: Math.random() < 0.5 ? -1 : 1,
      created : new Date(2018, 5, 5, 0, 5, 15)
    }
  ];
}
