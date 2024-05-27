import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];

  get tagHistory() {
    return [...this._tagsHistory];
  }

  searchTag(tag: string) {
    this._tagsHistory.push(tag);
  }
}
