import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ObjectsService} from '../../services/objects.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss']
})
export class ObjectListComponent implements OnInit, OnDestroy {

  category: string;

  objects: any[];
  objectsSubscription: Subscription;

  authorizedList = ['weapons', 'armors', 'skills', 'classes', 'talents', 'items', 'races', 'spells'];

  constructor(private objectsService: ObjectsService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url.split('/')[2]);
    this.category = this.router.url.split('/')[2];

    if (this.authorizedList.find(value => { if (value === this.category) { return true; } })) {

      this.objectsSubscription = this.objectsService.objectsSubject.subscribe(
        (data) => {
          this.objects = data;
        }
      );
      this.objectsService.getObjects(this.category);
      this.objectsService.emitObjects();
    }
  }

  onViewObject(id: number): void {
    this.router.navigate(['/encyclopedia', this.category, id]);
  }

  ngOnDestroy(): void {
    if (this.category) {
      this.objectsSubscription.unsubscribe();
    }
  }
}
