import { Injectable } from '@angular/core';
import { DBZChar } from '../interfaces/dbz-character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  // This make us able to inject the service as a depedency on any part of the app.
  providedIn: 'root'
})
export class DBZService {

  public characters: DBZChar[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    }
  ];

  addCharacter(character: DBZChar): void {
    character.id = uuid();
    console.log(character)

    this.characters.push(character);
  }

  onDeleteCharacter(id: string): void {
    const newCharacterList = this.characters.filter( char => char.id !== id);

    this.characters = newCharacterList;
  }

}
