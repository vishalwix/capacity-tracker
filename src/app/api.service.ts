import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment'


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


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // To fetch all work type/category from backend.

  // public currentUserSubject: BehaviorSubject<User>;
  //public currentUser: Observable<User>;

  constructor(private httpClient: HttpClient) { }

  public getAllWorkCategory(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/manager/getWorkCategory`)
      .pipe(map(data => {
        return data;
      }));
  }

  public getAllWorkType(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/manager/getWorkType`)
      .pipe(map(data => {
        return data;
      }));
  }

  public addWorkType(workData: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/manager/addWorkType`, workData)
      .pipe(map(data => {
        return data;
      }));
  }

  public getWorkTypeById(id: any): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/manager/getWorkTypeById/` + id)
      .pipe(map(data => {
        return data;
      }));
  }

  public updateWorkType(id: any, params: any): Observable<any> {
    return this.httpClient.put<any>(`${environment.apiUrl}/manager/updateWorkType/` + id, params)
      .pipe(map(data => {
        return data;
      }));
  }

  public deleteWorkType(id: any): Observable<any> {
    return this.httpClient.delete<any>(`${environment.apiUrl}/manager/deleteWorkType/` + id)
      .pipe(map(data => {
        return data;
      }));
  }

  public loginApi(workData: any): Observable<any> {
    const req = {
      email: "vish@xyz.com",
      password: "Vish@123"
    }
    return this.httpClient.post<any>(`${environment.apiUrl}/auth/signin`, req)
      .pipe(map(data => {
        return data;
      }));
  }

  public getCcbData(req: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/manager/getCCBData`, req)
        .pipe(map(data => {
            return data;
        }));
  }

  public getAllAppGroupData(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/manager/getAppGroupData`)
      .pipe(map(data => {
        return data;
      }));
  }

  public addCCBProject(workData: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/manager/addCcbProject`, workData)
      .pipe(map(data => {
        return data;
      }));
  }

  public getAppGroupById(id: any): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/manager/getApplicationGroupById/` + id)
      .pipe(map(data => {
        return data;
      }));
  }

  public getCcbDataById(id: any): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/manager/getCcbDataById/` + id)
      .pipe(map(data => {
        return data;
      }));
  }

  public deleteCcbData(id: any): Observable<any> {
    return this.httpClient.delete<any>(`${environment.apiUrl}/manager/deleteCcbData/` + id)
      .pipe(map(data => {
        return data;
      }));
  }

  public updateCCBData(id: any, params: any): Observable<any> {
    return this.httpClient.put<any>(`${environment.apiUrl}/manager/updateCCBData/` + id, params)
      .pipe(map(data => {
        return data;
      }));
  }

}
