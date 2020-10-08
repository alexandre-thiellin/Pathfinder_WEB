import { Component, OnInit } from '@angular/core';
import {Item} from '../../../model/item.model';
import {ItemsService} from '../../../services/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item: Item;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItemById(this.itemsService.itemViewed.id).then(
      (data) => {
        this.item = data;
      }
    );
  }

}
