import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { CardComponent } from '../portfolio/card/card.component';



@NgModule({
  declarations: [
    TitleComponent
  ],
  exports : [
    TitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IndexModule { }
