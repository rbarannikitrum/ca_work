import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkersService {
  constructor(private http: HttpClient) {}

  public getWorkers(): Observable<Array<Worker>> {
    return this.http.get<Array<Worker>>('http://localhost:4001/api/users/hr');
  }

  public addWorker(worker: any) {
    return this.http.post<Worker>('http://localhost:4001/api/users/hr', worker);
  }
}
