import { Component } from '@angular/core';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/direction',
      name: 'Direction',
      exact: true
    },
    {
      link: '/contact',
      name: 'Contact',
      exact: true
    },
    {
      link: '/about',
      name: 'About',
      exact: true
    }
  ];
}
