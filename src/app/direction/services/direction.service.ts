import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
/*
import { map, catchError } from 'rxjs/operators';
*/

import { Expedition } from '../model/expedition.interface';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  constructor(
    private http: HttpClient
  ) { }

  getExpedition(): Observable<Expedition[]> {
    return this.http.get<Expedition[]>('/api/expeditions');
  }
}
