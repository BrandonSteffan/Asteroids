import { Component } from '@angular/core';
import { Asteroid } from 'src/app/types/asteroid';

@Component({
  selector: 'app-asteroid',
  templateUrl: './asteroid.component.html',
  styleUrls: ['./asteroid.component.css']
})
export class AsteroidComponent {
    asteroid: Asteroid  = {
      id:1,
      name: "365014 (2008 OX2)",
      approachDate: "2023-09-02",
      size: 0.57
    };
}
