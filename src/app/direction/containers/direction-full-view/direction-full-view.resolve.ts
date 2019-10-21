import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DirectionService } from '../../services/direction.service';
import { Expedition } from '../../model/expedition.interface';

@Injectable()
export class DirectionFullViewResolve implements Resolve<Expedition[]> {
  constructor(private directionService: DirectionService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.directionService.getFullView(route.params.name);
  }
}
