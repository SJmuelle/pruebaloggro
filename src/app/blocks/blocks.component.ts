import {  CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlocksService } from './blocks.service';
type ResultState = 'success' | 'error' | null;
@Component({
  selector: 'app-blocks',
  standalone: true,
   imports: [CommonModule, FormsModule],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.scss'
})
export class BlocksComponent {
  word = '';
  result: ResultState = null;
  message = '';

  constructor(public readonly blocksService: BlocksService) {}

  checkWord(): void {
    const trimmed = this.word.trim();

    if (!trimmed) {
      this.result = null;
      this.message = 'Escribe una palabra para comprobar.';
      return;
    }

    const can = this.blocksService.canFormWord(trimmed);

    if (can) {
      this.result = 'success';
      this.message = `¡Si se puede formar "${trimmed.toUpperCase()}"! `;
    } else {
      this.result = 'error';
      this.message = `No se puede formar "${trimmed.toUpperCase()}" `;
    }
  }
}
