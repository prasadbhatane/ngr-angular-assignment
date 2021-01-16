import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlighterDirective } from './highlighter.directive';



@NgModule({
  declarations: [HighlighterDirective],
  imports: [
    CommonModule
  ]
})
export class CustomDirectivesModule { }
