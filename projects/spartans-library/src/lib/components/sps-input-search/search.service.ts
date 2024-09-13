import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  public search(query: string, apiUrl: string): Observable<unknown> {
    if (!query) {
      return of([]);
    }
    return this.http
      .get(`${apiUrl}/${encodeURIComponent(query)}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Ocurrió un error:', error);
    return throwError(() => error);
  }
}
