import { Component, OnInit } from '@angular/core';
import { AsteroidDataService } from 'src/app/services/asteroid-data.service';
import { Asteroid } from 'src/app/types/asteroid';

@Component({
  selector: 'app-asteroid-list',
  templateUrl: './asteroid-list.component.html',
  styleUrls: ['./asteroid-list.component.css']
})
export class AsteroidListComponent implements OnInit {
  asteroidData: Asteroid[] =  [];

  constructor(private service: AsteroidDataService ) {}

  ngOnInit(): void {
    let temp: any;
    this.service.getAsteroidData().subscribe((response) => {temp = response; console.log(response);});
    
    
  }
}
