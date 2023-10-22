// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hola Counter</h1>'
// })
// export class CounterComponent{

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }} </h3>
  <p>
    Bienvenidos a Angular
  </p>

  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

  export class CounterComponent {

  public counterDefault: number = 10;
  public counter: number = this.counterDefault;

  increaseBy( value: number): void {
    this.counter += value;
  }

  resetCounter(){
    this.counter = this.counterDefault;
  }
}
