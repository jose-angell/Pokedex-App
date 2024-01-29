import { Component, Input, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { Pokedex } from '../../interfaces/pokedex.interface';

@Component({
  selector: 'pokedex-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit{
  // @Input()
 // public pokemons!: Pokedex;


  constructor(private pokedexServices:PokedexService){}
  ngOnInit(): void {
    this.pokedexServices.searchPokedex();
  }


  get pokedex(): Pokedex {
    return this.pokedexServices.pokedex;
  }
  //pokedex():Pokedex{
   // return this.pokedexServices.pokedex;
  //}
}
