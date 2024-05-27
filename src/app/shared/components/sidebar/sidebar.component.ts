import { Component, inject } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './sidebar.component.css',
  template: `
    <div class="sidebar">
      <h3>GifsApp</h3>
      <hr />

      @for(gif of gifs; track gif){
      <div>
        <button class="boton">{{ gif | titlecase }}</button>
      </div>
      }
    </div>
  `,
})
export class SidebarComponent {
  private gifsService = inject(GifsService);

  get gifs() {
    return this.gifsService.tagHistory;
  }
}
