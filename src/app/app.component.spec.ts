import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BlocksComponent } from './blocks/blocks.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, BlocksComponent]
    }).compileComponents();
  });

  it('debería crear la app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('debería renderizar el componente de bloques', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.nativeElement;
   const blocksHost = compiled.querySelector('app-blocks');
    expect(blocksHost).toBeTruthy();
  });
});
