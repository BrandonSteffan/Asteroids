import { Component, OnInit } from '@angular/core';
import { AsteroidDataService } from 'src/app/services/asteroid-data.service';
import { Asteroid } from 'src/app/types/asteroid';
import { asteroid_response_body } from 'src/app/types/asteroid_response_body';

@Component({
  selector: 'app-asteroid-list',
  templateUrl: './asteroid-list.component.html',
  styleUrls: ['./asteroid-list.component.css']
})
export class AsteroidListComponent implements OnInit {
  asteroidResponse?: Asteroid[]; 

  constructor(private service: AsteroidDataService ) {}

  ngOnInit(): void {
    this.getAsteroids();

  }
  getAsteroids(){
    this.service.getAsteroidData().subscribe(asteroid => this.asteroidResponse = asteroid.near_earth_objects['2023-09-28'])
  }
}
