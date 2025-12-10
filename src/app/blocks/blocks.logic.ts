import { Block } from './blocks.model';

/**
 * Función pura que determina si una palabra se puede formar con los bloques dados.
 * Solo responde si la palabra se puede formar con los bloques.
 */
export function canFormWord(blocks: Block[], word: string): boolean {
  
  
  const normalized = word.toUpperCase().trim();


  if (!normalized) return false;


  if (/[^A-Z]/.test(normalized)) {
    return false;
  }

  const letters = normalized.split('');

  const used = new Array(blocks.length).fill(false);

  const backtrack = (index: number): boolean => {
    if (index === letters.length) return true;

    const letter = letters[index];

    for (let i = 0; i < blocks.length; i++) {
      if (!used[i] && blocks[i].includes(letter)) {
        used[i] = true;
        if (backtrack(index + 1)) return true;
        used[i] = false;
      }
    }

    return false;
  };

  return backtrack(0);
}
