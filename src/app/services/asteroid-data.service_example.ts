import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asteroid } from '../types/asteroid';
import {Observable} from "rxjs";
import { asteroid_response_body } from '../types/asteroid_response_body';

@Injectable({
  providedIn: 'root'
})
export class AsteroidDataService {
  constructor(private httpClient: HttpClient) { }
  getAsteroidData(): Observable<asteroid_response_body>{
    const asteroidUrl = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-09-25&end_date=2023-10-2&";
    //Insert your api key here
    const apiKey = "api_key=";
    const url = asteroidUrl + apiKey;
    return this.httpClient.get<asteroid_response_body>(url);
  }

  getAsteroidById(id:number):Observable<Asteroid>{
    const asteroidUrl = "https://api.nasa.gov/neo/rest/v1/neo/";
    //Insert your api key here
    const apiKey = "api_key="

    const url = asteroidUrl+ id +"?" +apiKey;

    return this.httpClient.get<Asteroid>(url);
  }
}