import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsteroidListComponent } from './components/asteroid-list/asteroid-list.component';
import { AsteroidDetailsComponent } from './components/asteroid-details/asteroid-details.component';

const routes: Routes = [
  {path:"asteroids" , component: AsteroidListComponent},
  {path: "asteroids/:id",component: AsteroidDetailsComponent},
  {path: "" , redirectTo: "/asteroids" ,pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
