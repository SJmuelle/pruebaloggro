import { Component } from '@angular/core';
import { BlocksComponent } from "./blocks/blocks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ BlocksComponent],
  template:  `<app-blocks />`
})
export class AppComponent {}
