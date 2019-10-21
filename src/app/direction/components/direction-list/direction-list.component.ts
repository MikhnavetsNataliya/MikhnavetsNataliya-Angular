import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Expedition } from '../../model/expedition.interface';

@Component({
  selector: 'app-direction-list',
  templateUrl: './direction-list.component.html',
  styleUrls: ['./direction-list.component.css']
})

export class DirectionListComponent {

  @Input()
  expedition: Expedition;
}
