import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent {
  selectedPokemonDetails: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.selectedPokemonDetails = navigation.extras.state['pokemonDetails'];
    }
  }

  ngOnInit(): void {
  }

}
