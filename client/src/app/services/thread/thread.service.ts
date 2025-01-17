import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  private apiUrl = 'http://localhost:3000/threads'; 

  constructor(private http: HttpClient) {}

  createThread(thread: { name: string; description: string; userId: string, categoryId: string, status: string }): Observable<any> {
    return this.http.post(this.apiUrl, thread);
  }

  getThreads(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
