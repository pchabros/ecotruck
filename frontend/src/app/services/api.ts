import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const omitUndefined = (obj: Record<string, string | number | undefined> | undefined) => {
  if (!obj) return obj;
  return Object.fromEntries(Object.entries(obj).filter(([_, val]) => val !== undefined)) as Record<
    string,
    string | number
  >;
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  get<T>(endpoint: string, params?: Record<string, string | number | undefined>): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}/`, { params: omitUndefined(params) });
  }
}
