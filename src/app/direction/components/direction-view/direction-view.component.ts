import {Component} from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import {Expedition} from '../../model/expedition.interface';

import {Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';

@Component({
  selector: 'app-direction-view',
  templateUrl: './direction-view.component.html',
  styleUrls: ['./direction-view.component.css']
})
export class DirectionViewComponent {
  expedition: Observable<Expedition> = this.route.data.pipe(pluck('expedition'));

  constructor(private route: ActivatedRoute) {
    console.log(this.route)
  }

}
