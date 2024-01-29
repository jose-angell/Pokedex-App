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
  searchPokedex():void {

    this.http.get<Pokedex>('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
    .subscribe(resp =>{
      this.pokedex = resp
      console.log(this.pokedex)
    })
  }
  searchPokemon(PokemonUrl: string):Observable<Pokemon>{
    console.log(PokemonUrl)
    return this.http.get<Pokemon>(PokemonUrl)
    // .subscribe(resp => {
    //   this.pokemon = resp;
    // })
  }
}
