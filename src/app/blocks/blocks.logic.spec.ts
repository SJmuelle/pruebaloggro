import { BLOCKS } from './blocks.model';
import { canFormWord } from './blocks.logic';

describe('canFormWord (función pura)', () => {
  it('retorna true para palabras válidas', () => {
    expect(canFormWord(BLOCKS, 'A')).toBeTrue();
    expect(canFormWord(BLOCKS, 'LIBRO')).toBeTrue();
    expect(canFormWord(BLOCKS, 'TRAJE')).toBeTrue();
    expect(canFormWord(BLOCKS, 'COMUN')).toBeTrue();
  });

  it('retorna false para palabras inválidas', () => {
    expect(canFormWord(BLOCKS, 'BOZO')).toBeFalse();
    expect(canFormWord(BLOCKS, 'CAMPANA')).toBeFalse();
  });

  it('ignora minúsculas y caracteres extraños', () => {
    expect(canFormWord(BLOCKS, ' liBro ')).toBeTrue();
    expect(canFormWord(BLOCKS, 'libro!')).toBeFalse();
  });

  it('retorna false para cadena vacía o solo espacios', () => {
    expect(canFormWord(BLOCKS, '')).toBeFalse();
    expect(canFormWord(BLOCKS, '   ')).toBeFalse();
  });
});
