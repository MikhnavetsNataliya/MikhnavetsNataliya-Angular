import { error, ok, sendJSON } from './helpers';

import { expeditions } from './data/expeditions';

import { Expedition } from '../direction/model/expedition.interface';

/*export function getExpedition() {
  return ok<Expedition[]>(expeditions);
}*/

export function getExpeditions(type) {
  return ok(expeditions.filter(expedition => expedition.type === type));
}

export function getExpeditionById(expeditionId: number) {
  return ok(expeditions.find(expedition => expedition.id === expeditionId));
}
