//a-module (para crear todo de una )
import {CommonModule} from "@angular/common"
import { NgModule } from "@angular/core";

import { ListComponent } from "./List/list.component";
import { HeroComponent } from "./Hero/hero.component";


@NgModule({
  declarations:[
    ListComponent,
    HeroComponent
  ],
  exports:[
    ListComponent,
    HeroComponent
  ],
  imports:[
    CommonModule,
  ]
})
export class HeroModule{}


