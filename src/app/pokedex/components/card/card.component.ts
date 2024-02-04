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

public dataPokemon: string[]=["hp", "attack","defense","special-attack","special-defense","speed"]
public svg: string[] = ['../../../../assets/icons/hp.svg','../../../../assets/icons/attack.svg','../../../../assets/icons/defense.svg','../../../../assets/icons/special-attack.svg','../../../../assets/icons/special-defense.svg','../../../../assets/icons/speed.svg']
constructor(private pokemonService: PokedexService){
}
ngOnInit(): void {

    if(!this.pokemonUrl) throw new Error('Url property is required');
   this.pokemonService.searchPokemon(this.pokemonUrl).subscribe(resp => {
    this.pokemon = resp
   })

  }



}
