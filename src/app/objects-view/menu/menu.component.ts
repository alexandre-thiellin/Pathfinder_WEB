import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {ObjectsService} from '../../services/objects.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  objects: any[] = [];
  objectsSubscription: Subscription;

  encyclopedia = [
    ['Armes', 'weapons'],
    ['Armures', 'armors'],
    ['Compétences', 'skills'],
    ['Classes', 'classes'],
    ['Dons', 'talents'],
    ['Items', 'items'],
    ['Races', 'races'],
    ['Sorts', 'spells']
  ];

  menuType: string;

  constructor(private objectsService: ObjectsService, private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.router.url.split('/')[1]);
    this.menuType = this.router.url.split('/')[1];

    switch (this.menuType) {
      case 'encyclopedia':
        break;
      case 'characters':
        this.loadCharacters();
        break;
      default:
        this.router.navigate(['/home']);
        break;
    }
  }

  loadCharacters(): void {
    this.objectsSubscription = this.objectsService.objectsSubject.subscribe(
      (data) => {
        this.objects = data;
      }
    );
    this.objectsService.getObjects('characters');
    this.objectsService.emitObjects();
  }

  ngOnDestroy(): void {
    if (this.menuType === 'characters') {
      this.objectsSubscription.unsubscribe();
    }
  }
}
