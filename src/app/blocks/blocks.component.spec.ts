import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlocksComponent } from './blocks.component';
import { BlocksService } from './blocks.service';

describe('BlocksComponent', () => {
  let fixture: ComponentFixture<BlocksComponent>;
  let component: BlocksComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocksComponent],
      providers: [BlocksService]
    }).compileComponents();

    fixture = TestBed.createComponent(BlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('muestra mensaje de éxito cuando la palabra es válida', () => {
    component.word = 'LIBRO';
    component.checkWord();
    fixture.detectChanges();

    expect(component.result).toBe('success');

    const messageEl: HTMLElement =
     fixture.nativeElement.querySelector('[data-testid="result-message"]');
    expect(messageEl.textContent).toContain('LIBRO');
  });

  it('muestra mensaje de error cuando la palabra es inválida', () => {
    component.word = 'BOZO';
    component.checkWord();
    fixture.detectChanges();

    expect(component.result).toBe('error');

    const messageEl: HTMLElement =
     fixture.nativeElement.querySelector('[data-testid="result-message"]');
    expect(messageEl.textContent).toContain('BOZO');
  });

  it('pide escribir una palabra cuando el campo está vacío', () => {
    component.word = '   ';
    component.checkWord();
    fixture.detectChanges();

    expect(component.result).toBeNull();

    const messageEl: HTMLElement =
     fixture.nativeElement.querySelector('[data-testid="result-message"]');
    expect(messageEl.textContent).toContain('Escribe una palabra');
  });
});
