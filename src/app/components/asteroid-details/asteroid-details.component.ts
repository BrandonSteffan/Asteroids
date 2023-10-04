import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Asteroid } from 'src/app/types/asteroid';
import { AsteroidDataService } from 'src/app/services/asteroid-data.service';

@Component({
  selector: 'app-asteroid-details',
  templateUrl: './asteroid-details.component.html',
  styleUrls: ['./asteroid-details.component.css']
})
export class AsteroidDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: AsteroidDataService
    ){}
    asteroid?: Asteroid;
    id?: number;
    ngOnInit(){
      this.id = Number(this.route.snapshot.paramMap.get("id"));
      this.service.getAsteroidById(this.id).subscribe(asteroid => this.asteroid = asteroid);
    }

    goBack(){
      this.location.back();
    }
}
