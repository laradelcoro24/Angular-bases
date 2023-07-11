import { Component} from '@angular/core';
import { dbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class PageComponent {

  constructor(private dbzService: dbzService){}

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeletedCharacter(id: string): void{
    this.dbzService.deletedCharacterById(id);
  }
  onNewCharacter(character: Character){
    this.dbzService.addCharacter(character)

  }


}


