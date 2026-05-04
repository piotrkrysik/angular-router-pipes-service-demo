import { Injectable } from '@angular/core';
import { MyData } from './my-data';

@Injectable({
  providedIn: 'root'
})
export class MyDataRepoService {
  private items: MyData[] = [
    new MyData(1, 150.50, new Date('2026-05-01'), 'Raport A', 'Opis raportu finansowego'),
    new MyData(2, 200.00, new Date('2026-05-02'), 'Notatka B', 'Szczegóły spotkania'),
    new MyData(3, 10.99, new Date('2026-05-03'), 'Zakupy C', 'Lista materiałów biurowych'),
    new MyData(4, 3000.00, new Date('2026-05-04'), 'Projekt D', 'Dokumentacja techniczna'),
    new MyData(5, 0.00, new Date('2026-05-05'), 'Szkic E', 'Wstępne założenia systemu')
  ]

  constructor() { }

  public getAll(): MyData[] {
    return [...this.items];
  }

  public getById(id: number): MyData | undefined {
    const foundItem = this.items.find(item => item.id === id);
    return foundItem ? { ...foundItem } : undefined;
  }
}
