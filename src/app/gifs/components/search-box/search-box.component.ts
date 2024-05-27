import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'search-box',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './search-box.component.css',
  template: `
    <div class="contenedor">
      <h2>Buscar:</h2>
      <input
        #txtTag
        (keyup.enter)="searchTag()"
        type="text"
        class="buscador"
        placeholder="Buscar gifs..."
      />
    </div>
  `,
})
export class SearchBoxComponent {
  private gifsService = inject(GifsService);

  @ViewChild('txtTag')
  tagInput!: ElementRef<HTMLInputElement>;

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
