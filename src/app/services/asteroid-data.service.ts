import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Asteroid } from '../types/asteroid';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AsteroidDataService {
  private url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-09&api_key=rXXV4rb59A2CTgI46wwmc5PbVqFQM44DMlWrKRK7";
  constructor(private httpClient: HttpClient) { }
  getAsteroidData(): Observable<Asteroid[]>{
    return this.httpClient.get<Asteroid[]>(this.url);
  }
}
