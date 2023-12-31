import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Contacto } from './contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private contactosUrl = 'api/contactos';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getContactos(): Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.contactosUrl)
      .pipe(
        tap(_ => this.log("fetched contactos")),
        catchError(this.handleError<Contacto[]>("getContactos", []))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
