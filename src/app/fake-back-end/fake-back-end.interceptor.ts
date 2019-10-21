import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';

import endpoints from './endpoints';
import { checkUrl, idFromUrl } from './helpers';
import { getExpeditions, getExpeditionById} from './routes';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { body } = request;

    console.log('request', request);

    return of(null).pipe(
      mergeMap(handleRoute),
      materialize(),
      delay(500),
      dematerialize()
    );

    function handleRoute() {
      switch (true) {
        case checkUrl(request, endpoints.expeditions.expeditions):
          const type = request.params.get('type');
          return getExpeditions(type);
        case request.url.match(/\/expeditions\/\d+$/) && request.method === 'GET':
          const expeditionId = idFromUrl(request);
          return getExpeditionById(expeditionId);
        default:
          return next.handle(request);
      }
    }
  }
}
