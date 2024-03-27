import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class PokinfService {
  apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemonDetails(id: string): Observable<any> {
    const url = `${this.apiUrl}${id}`;
    return this.http.get(url);
  }

  getPokemonDetailsByName(pokemonName: string): Observable<any> {
    const url = `${this.apiUrl}${pokemonName}`;
    return this.http.get(url);
  }
}
