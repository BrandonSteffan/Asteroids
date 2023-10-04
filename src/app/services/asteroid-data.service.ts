import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asteroid } from '../types/asteroid';
import {Observable} from "rxjs";
import { asteroid_response_body } from '../types/asteroid_response_body';

@Injectable({
  providedIn: 'root'
})
export class AsteroidDataService {
  private url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-09-25&end_date=2023-10-2&api_key=rXXV4rb59A2CTgI46wwmc5PbVqFQM44DMlWrKRK7";
  constructor(private httpClient: HttpClient) { }
  getAsteroidData(): Observable<asteroid_response_body>{
    return this.httpClient.get<asteroid_response_body>(this.url);
  }

  getAsteroidById(id:number):Observable<Asteroid>{
    const asteroidUrl = "https://api.nasa.gov/neo/rest/v1/neo/";
    const apiKey = "api_key=rXXV4rb59A2CTgI46wwmc5PbVqFQM44DMlWrKRK7"

    const url = asteroidUrl+ id +"?" +apiKey;

    return this.httpClient.get<Asteroid>(url);
  }
}
