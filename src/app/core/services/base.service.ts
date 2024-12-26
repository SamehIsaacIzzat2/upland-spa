import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

export class BaseService {
  protected apiUrl = 'http://localhost/FB8215/api/';

  constructor(private http: HttpClient, api: string = '') {
    this.http = http;
    this.apiUrl += api;
  }

  get<T>(
    url: string,
    headers?: HttpHeaders,
    params?: HttpParams
  ): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${url}`, { headers, params }).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  // Common POST request
  post<T>(
    url: string,
    body: any,
    headers?: HttpHeaders,
    params?: HttpParams
  ): Observable<T> {
    return this.http
      .post<T>(`${this.apiUrl}${url}`, body, { headers, params })
      .pipe(
        map((response) => response),
        catchError(this.handleError)
      );
  }

  // Common PUT request
  put<T>(
    url: string,
    body: any,
    headers?: HttpHeaders,
    params?: HttpParams
  ): Observable<T> {
    return this.http
      .put<T>(`${this.apiUrl}${url}`, body, { headers, params })
      .pipe(
        map((response) => response),
        catchError(this.handleError)
      );
  }

  // Common DELETE request with optional query parameters
  delete<T>(
    url: string,
    headers?: HttpHeaders,
    params?: HttpParams
  ): Observable<T> {
    return this.http
      .delete<T>(`${this.apiUrl}${url}`, { headers, params })
      .pipe(
        map((response) => response),
        catchError(this.handleError)
      );
  }

  // Error handling logic
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
