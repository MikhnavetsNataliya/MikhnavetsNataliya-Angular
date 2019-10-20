import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { DirectionService } from '../../services/direction.service';
import { Expedition } from '../../model/expedition.interface';

@Injectable()
export class DirectionViewResolve implements Resolve<Expedition> {
  constructor(private directionService: DirectionService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.directionService.getExpedition(route.params.id);
  }
}
