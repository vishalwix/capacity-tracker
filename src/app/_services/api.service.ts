import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })
};

const httpFileOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/form-data',
    Accept: 'multipart/form-data'
  })
};

@Injectable({ providedIn: 'root' })
export class ApiService {
  public currentUserSubject!: BehaviorSubject<User>;
  public currentUser!: Observable<User>;
  constructor(private httpClient: HttpClient) { }
}
