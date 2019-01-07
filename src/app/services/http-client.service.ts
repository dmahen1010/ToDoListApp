import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }

  backendUrl = 'http://localhost:8000';

  setupUrl(url) {
    return this.backendUrl + url;
  }

  /*
   * Function fetches the saved itemList from the backend using a GET request.
   */
  get(url, options?) {
    return this.http.get(this.setupUrl(url), options)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
          this.handleError(err);
        }
      );
  }

  /*
   * Function sends updaed Itemlists to the backend server in a POST.
   */
  post(url, jsonList) {
    console.log('Running HTTP POST now');
    return this.http.post(this.setupUrl(url), jsonList)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
          this.handleError(err);
        }
      );
  }


  /*
   * Boiler plate error handler.
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
      console.log(error);
    }
    // return an observable with a user-facing error message
    return throwError('Something went wrong.');
  }
}
