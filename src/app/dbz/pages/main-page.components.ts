import { Component } from '@angular/core';
import { DBZChar } from '../interfaces/dbz-character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.components.html'
})

export class MainPageComponent {
  public dbzChars: DBZChar[] = [
    {
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    }
  ];

  constructor() { }

  addCharacter(character: DBZChar): void {
    console.log('Main page');
    console.log(character);
    this.dbzChars.push(character);
    console.log(this.dbzChars)
  }

  onDeleteCharacter(index: number): void {
    this.dbzChars.splice(index, 1);
  }
}
