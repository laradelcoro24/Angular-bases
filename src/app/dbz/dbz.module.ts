import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';




@NgModule({
  declarations: [PageComponent, ListComponent, AddCharacterComponent],
  exports:[PageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
