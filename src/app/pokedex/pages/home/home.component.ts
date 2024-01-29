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
  }


}
