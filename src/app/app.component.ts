import { Component } from '@angular/core';
import { ExpeditionService } from './expedition.service'

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExpeditionService]
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
      name: 'contact',
      exact: true
    }
  ];
}
