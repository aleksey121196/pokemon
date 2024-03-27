import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router module


interface Pokemon {
  name: string;
  detailsUrl: string;
}

interface ApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  // Add other properties as needed
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  selectedPokemonDetails: PokemonDetails | null = null; // Declare selectedPokemonDetails property

  pokemons: Pokemon[] = [];
  nextUrl: string | null = null;
  previousUrl: string | null = null;

  constructor(private http: HttpClient,private router: Router) { }


  ngOnInit(): void {
    this.fetchPokemonData('https://pokeapi.co/api/v2/pokemon');
  }

  fetchPokemonData(url: string): void {
    this.http.get<ApiResponse>(url).subscribe(response => {
      this.pokemons = response.results;
      this.nextUrl = response.next;
      this.previousUrl = response.previous;
    });
  }

  fetchPokemonDetails(pokemonName: string): void {
    const detailsUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    this.http.get<any>(detailsUrl).subscribe(details => {
    this.selectedPokemonDetails = details; // Assuming you have a variable named selectedPokemonDetails to store the details
    this.router.navigate(['/details'], { state: { pokemonDetails: this.selectedPokemonDetails } }); // Navigate to details page


    });
  }
  

  goToNextPage(): void {
    if (this.nextUrl) {
      this.fetchPokemonData(this.nextUrl);
    }
  }

  goToPreviousPage(): void {
    if (this.previousUrl) {
      this.fetchPokemonData(this.previousUrl);
    }
  }

}
