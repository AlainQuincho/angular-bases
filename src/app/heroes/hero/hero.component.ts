import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45;
  public visible: boolean = true;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroeDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    this.name = 'Batman';
  }

  changeAge(): void {
    this.age = 20;
  }

  resetForm(): void {
    this.name = 'iroman';
    this.age = 45;
  }
}
