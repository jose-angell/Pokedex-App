import { Injectable } from '@angular/core';
import { Pokedex } from '../interfaces/pokedex.interface';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../interfaces/pokemon.interface';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PokedexService {
  public pokedex!: Pokedex;
  public pokemon!: Pokemon;
  public serviceUrlInit: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';
  constructor(private http: HttpClient) {
    //this.searchPokedex();
   }
  searchPokedex(pokedexUrl: string):void {

    this.http.get<Pokedex>(pokedexUrl)
    .subscribe(resp =>{
      this.pokedex = resp
    })
  }
  searchPokemon(PokemonUrl: string):Observable<Pokemon>{
    return this.http.get<Pokemon>(PokemonUrl)
  }
}
