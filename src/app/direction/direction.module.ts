import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {DirectionTypeComponent} from './components/direction-type/direction-type.component';
import {DirectionListComponent} from './components/direction-list/direction-list.component';
import {DirectionViewComponent} from './components/direction-view/direction-view.component';
import {DirectionFullViewComponent} from './containers/direction-full-view/direction-full-view.component';
import {DirectionTypeViewComponent} from './containers/direction-type-view/direction-type-view.component';

import {DirectionViewResolve} from './components/direction-view/direction-view.resolve';
import {DirectionFullViewResolve} from './containers/direction-full-view/direction-full-view.resolve';
import {DirectionService} from './services/direction.service';

export const ROUTES: Routes = [
  {
    path: 'direction',
    component: DirectionTypeViewComponent,
    children: [
      {
        path: 'type/:name',
        component: DirectionFullViewComponent,
        resolve: {
          expeditions: DirectionFullViewResolve
        },
      },
      {
        path: 'expedition/:id',
        component: DirectionViewComponent,
        resolve: {
          expedition: DirectionViewResolve
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    DirectionTypeComponent,
    DirectionListComponent,
    DirectionViewComponent,
    DirectionFullViewComponent,
    DirectionTypeViewComponent
  ],
  providers: [
    DirectionService,
    DirectionFullViewResolve,
    DirectionViewResolve
  ],
  exports: [
    DirectionTypeComponent,
    DirectionListComponent,
    DirectionViewComponent,
    DirectionFullViewComponent,
    DirectionTypeViewComponent
  ]
})

export class DirectionModule {
}
