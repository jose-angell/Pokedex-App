import { Component, Input, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { Pokedex } from '../../interfaces/pokedex.interface';

@Component({
  selector: 'pokedex-home-page',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomePageComponent  {

  constructor(private pokedexServices:PokedexService ){
    this.pokedexServices.searchPokedex('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
  }
  get pokedex(): Pokedex {
    return this.pokedexServices.pokedex;
  }
  PreviusPage(){
    if(this.pokedex.previous == null) return
    this.pokedexServices.searchPokedex(this.pokedex.previous)
  }
  NextPage(){
    if(this.pokedex.next == null) return
    this.pokedexServices.searchPokedex(this.pokedex.next)
  }

}
