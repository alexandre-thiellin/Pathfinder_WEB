import { Injectable } from '@angular/core';
import {Item} from '../model/item.model';
import {Subject} from 'rxjs';
import {PathfinderApiService} from './pathfinder-api.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items: Item[] = [];
  itemsSubject = new Subject<Item[]>();
  itemViewed: Item;

  constructor(private pathfinderApi: PathfinderApiService) { }

  emitItems(): void {
    this.itemsSubject.next(this.items);
  }

  getItems(): void {
    this.pathfinderApi.getItems().subscribe(
      (data) => {
        this.items = data;
        this.emitItems();
      }
    );
  }

  getItemById(id: number): Promise<Item> {
    return new Promise<Item>(
      (resolve, reject) => {
        this.pathfinderApi.getItemById(id).subscribe(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
}
