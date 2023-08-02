import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DBZChar } from '../../interfaces/dbz-character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characters: DBZChar[] = [];

  @Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    this.onDeleteId.emit(index);
  }
}
