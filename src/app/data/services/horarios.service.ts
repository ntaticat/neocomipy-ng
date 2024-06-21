import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IHorarioPost } from '../interfaces/comipy.interface';

@Injectable({
  providedIn: 'root',
})
export class HorariosService {
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

  postHorario(horarioInfo: IHorarioPost): Observable<{}> {
    const method = `${this.url}/horarios`;

    const request = {
      ...horarioInfo,
    };

    return this.http.post(method, request);
  }
}
