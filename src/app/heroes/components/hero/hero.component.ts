import { Component } from '@angular/core';

interface HeroType {
  name: string,
  age: number
}

export class Hero implements HeroType{
  constructor(public name: string, public age: number){}

  get formatedAge(): string {
    return `${ this.age } años`;
  }
}

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  get heroDescription(): string {
    return `${ this.name } - ${ this.age }`
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetData(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
