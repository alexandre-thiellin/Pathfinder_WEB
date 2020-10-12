import {Component, OnDestroy, OnInit} from '@angular/core';
import {Item} from '../../model/item.model';
import {Subscription} from 'rxjs';
import {ItemsService} from '../../services/items.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit, OnDestroy {

  items: Item[];
  itemsSubscription: Subscription;

  constructor(private itemsService: ItemsService, private router: Router) { }

  ngOnInit(): void {
    this.itemsSubscription = this.itemsService.itemsSubject.subscribe(
      (data) => {
        this.items = data;
      }
    );
    this.itemsService.getItems();
    this.itemsService.emitItems();
  }

  onViewItem(id: number): void {
    this.router.navigate(['/encyclopedia', 'items', id]);
  }

  ngOnDestroy(): void {
    this.itemsSubscription.unsubscribe();
  }
}
