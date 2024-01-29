import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { HomePageComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    CardListComponent,
    CardComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class PokedexModule { }
