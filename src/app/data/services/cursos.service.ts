import { Injectable } from '@angular/core';
import { ICurso, ICursoPost } from '../interfaces/comipy.interface';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
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

  postCurso(cursoInfo: ICursoPost): Observable<{}> {
    const method = `${this.url}/cursos`;

    const request = {
      ...cursoInfo,
    };

    return this.http.post(method, request);
  }

  getCursos(): Observable<ICurso[]> {
    const method = `${this.url}/cursos`;

    return this.http
      .get<ICurso[]>(method)
      .pipe(retry(3), catchError(this.handleError));
  }

  getCurso(cursoId: number): Observable<ICurso> {
    const method = `${this.url}/cursos/${cursoId}`;

    return this.http.get<ICurso>(method);
  }
}
