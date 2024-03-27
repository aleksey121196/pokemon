import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuypokemonsComponent } from './buypokemons/buypokemons.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'buy-pokemone',component:BuypokemonsComponent},
  { path: 'details', component: PokemonDetailsComponent } // Add route for details page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
