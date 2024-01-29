import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/pokedex.interface';
import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'pokedex-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
@Input()
public pokemonUrl!: string ;
public pokemon!: Pokemon;
constructor(private pokemonService: PokedexService){
}
ngOnInit(): void {
    //console.log(this.pokemon)
    if(!this.pokemonUrl) throw new Error('Url property is required');
   this.pokemonService.searchPokemon(this.pokemonUrl).subscribe(resp => {
    console.log(resp)
    this.pokemon = resp
   })

    //throw new Error('Method not implemented.');
  }
get pokemonData():Pokemon{
  return this.pokemonService.pokemon;
}


}
