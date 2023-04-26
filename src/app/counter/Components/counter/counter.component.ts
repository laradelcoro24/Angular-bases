import { Component } from '@angular/core';


@Component({
  selector:'app-counter',
  template: `
    <h3> Contador: {{counter}}  </h3>

    <button (click)="incrementarBy(+1)">+1</button>
    <button (click)="resetearCounter()">Reset</button>

    <button (click)="incrementarBy(-1)">-1</button>

  `
})
export class CounterComponent{
  public counter: number= 10;

  incrementarBy(value: number):void{

   this.counter += value;
  }
  resetearCounter():void{
  this.counter=10; }
}
