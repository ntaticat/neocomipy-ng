import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IInteresado, IInteresadoPost } from '../interfaces/comipy.interface';

@Injectable({
  providedIn: 'root',
})
export class InteresadosService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  postInteresado(interesadoInfo: IInteresadoPost): Observable<IInteresado> {
    const method = `${this.url}/interesados`;

    const request = {
      ...interesadoInfo,
    };

    return this.http.post<IInteresado>(method, request);
  }

  getInteresado(interesadoId: number): Observable<IInteresado> {
    const method = `${this.url}/interesados/${interesadoId}`;

    return this.http.get<IInteresado>(method);
  }
}
