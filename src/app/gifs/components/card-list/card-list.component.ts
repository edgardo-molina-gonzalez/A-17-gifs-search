import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'card-list',
  standalone: true,
  styleUrl: './card-list.component.css',
  imports: [CommonModule],
  template: `
    <div class="card">
      <p>Hola mundo</p>
    </div>
  `,
})
export class CardListComponent {}
