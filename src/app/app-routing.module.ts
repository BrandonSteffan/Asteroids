import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsteroidListComponent } from './components/asteroid-list/asteroid-list.component';

const routes: Routes = [
  {path:"asteroids" , component: AsteroidListComponent},
  {path: "" , redirectTo: "/asteroids" ,pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
