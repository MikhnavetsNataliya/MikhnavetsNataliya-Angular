import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Expedition } from '../../model/expedition.interface';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-direction-full-view',
  templateUrl: './direction-full-view.component.html',
  styleUrls: ['./direction-full-view.component.css']
})
export class DirectionFullViewComponent {


  expeditions: Observable<Expedition[]> = this.route.data.pipe(pluck('expeditions'));
  title: Observable<string> = this.route.params.pipe(pluck('name'));

  constructor(private route: ActivatedRoute) {}

 /* items = [];
    ngOnInit() {
    // an example array of 150 items to be paged
    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  }

  onChangePage(expeditions: Array<any>) {
    // update current page of items
    this.expedition = expeditions;
  }*/
 }




