import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public ACCTUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('ACCTUser')!));
        this.ACCTUser = this.currentUserSubject.asObservable();
    }

    public get ACCTValue(): User {
        return this.currentUserSubject.value;
    }


    login(loginForm:any) {
        return this.http.post<any>(`${environment.apiUrl}/auth/signin`, loginForm)
            .pipe(map(user => {
                if (user.response && user.response.token) {                    
                    localStorage.setItem('ACCTUser', JSON.stringify(user.response));
                    this.currentUserSubject.next(user.response);
                }
                return user;
            }));
    }


    logout() {
        localStorage.removeItem('ACCTUser');
        localStorage.removeItem('oldpw');
       // this.currentUserSubject.next(null);
    }
}
