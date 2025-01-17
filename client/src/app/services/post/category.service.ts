import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'http://localhost:3000/categories'; 

  constructor(private http: HttpClient) {}

  createCategory(category: { name: string; description: string; parentID: string }): Observable<any> {
    return this.http.post(this.apiUrl, category);
  }

  getCategoriesWithThreads(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/categories');
  }
  
}
