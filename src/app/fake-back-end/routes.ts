import { error, ok, sendJSON } from './helpers';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { expeditions } from './data/expeditions';

export function getExpeditions(type) {
  return ok(expeditions.filter(expedition => expedition.type === type));
}

export function getExpeditionById(expeditionId: number) {
  return ok(expeditions.find(expedition => expedition.id === expeditionId));
}
