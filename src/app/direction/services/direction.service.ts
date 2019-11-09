import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';


import {Expedition} from '../model/expedition.interface';

@Injectable()
export class DirectionService {

  constructor(private http: HttpClient) {
  }

  getFullView(type: string): Observable<Expedition[]> {
    const options = {params: new HttpParams().set('type', type)};

    return this.http
      .get(`/api/expeditions`, options)
      .pipe(
        tap(console.log)
      );
  }

  getExpedition(id: string): Observable<Expedition> {
    return this.http
      .get(`/api/expeditions/${id}`)
      .pipe(
        tap(console.log)
      );
  }
}
