import { error, ok, sendJSON } from './helpers';

import { expeditions } from './data/expeditions';

import { Expedition } from '../direction/model/expedition.interface';

export function getExpedition() {
  return ok<Expedition[]>(expeditions);
}

