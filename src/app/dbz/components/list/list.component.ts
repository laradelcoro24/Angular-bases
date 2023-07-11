import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] =[{
    name:'Trunks', //valores por defecto
    power:10,
  }]
 @Output()
 public ondeleted:EventEmitter<string>= new EventEmitter();

 onDeletedChar(id?: string):void {
    // todo Emitir el ID del personaje
    if(!id) return;
    this.ondeleted.emit(id) //index es la variable indice definifa en list.html
  }

}
