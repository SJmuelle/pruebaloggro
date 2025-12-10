import { Injectable } from '@angular/core';
import { Block, BLOCKS } from './blocks.model';
import { canFormWord } from './blocks.logic';

@Injectable({ providedIn: 'root' })
export class BlocksService {
  readonly blocks: Block[] = BLOCKS;

  canFormWord(word: string): boolean {
    return canFormWord(this.blocks, word);
  }
}
