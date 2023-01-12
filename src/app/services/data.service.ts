import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person.interface';

type ApiResponse = {
  results: Person[]
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl: string;
  private itemType: string;

  constructor(private http: HttpClient) {
    this.itemType = 'people';
    this.apiUrl = 'https://swapi.dev/api/' + this.itemType;
  }

  getPeople(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }

  getPersonById(id: string): Observable<Person> {
    return this.http.get<Person>(this.apiUrl + '/' + id);
  }
}
