import { Component } from '@angular/core';
import { DBZService } from '../services/dbz.service';
import { DBZChar } from '../interfaces/dbz-character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.components.html'
})

export class MainPageComponent {
  constructor( private dbzService: DBZService ) {}

  get characters(): DBZChar[] {
    return [ ... this.dbzService.characters ];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacter(id);
  }

  onNewCharacter(character: DBZChar): void {
    this.dbzService.addCharacter(character);
  }
}
