import { Injectable } from '@angular/core';
import { DBZChar } from '../interfaces/dbz-character.interface';

@Injectable({
  // This make us able to inject the service as a depedency on any part of the app.
  providedIn: 'root'
})
export class DBZService {

  public characters: DBZChar[] = [
    {
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    }
  ];

  addCharacter(character: DBZChar): void {
    console.log('Main page');
    console.log(character);
    this.characters.push(character);
    console.log(this.characters)
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }

}
