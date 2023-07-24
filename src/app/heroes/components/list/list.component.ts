import { Component } from '@angular/core';
import { Hero } from '../hero/hero.component';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroes: Hero[] = [
    new Hero('Hulk',40),
    new Hero('Ironman', 45),
    new Hero('Spiderman', 25),
    new Hero('Black Widow', 40)
  ];

  public deletedHero?: string;

  deleteLastHero(): void {
    this.deletedHero = this.heroes.pop()?.name;
  }
}
