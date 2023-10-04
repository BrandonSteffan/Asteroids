import { Component, Input } from '@angular/core';
import { Asteroid } from 'src/app/types/asteroid';

@Component({
  selector: 'app-asteroid',
  templateUrl: './asteroid.component.html',
  styleUrls: ['./asteroid.component.css']
})
export class AsteroidComponent {
  @Input() asteroid?: Asteroid;
    // asteroid: Asteroid  = {
    //   id:1,
    //   name: "365014 (2008 OX2)",
    //   estimated_diameter.kilometers : 25,
    // };
}
