import { Component, OnInit } from '@angular/core';
import {Item} from '../../../model/item.model';
import {ItemsService} from '../../../services/items.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item: Item;

  constructor(private itemsService: ItemsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.itemsService.getItemById(this.activatedRoute.snapshot.params.id).then(
      (data) => {
        this.item = data;
      }
    );
  }

}
