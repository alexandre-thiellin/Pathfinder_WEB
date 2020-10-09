import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Weapon} from '../../model/weapon.model';
import {WeaponsService} from '../../services/weapons.service';

@Component({
  selector: 'app-weapons-list',
  templateUrl: './weapons-list.component.html',
  styleUrls: ['./weapons-list.component.scss']
})
export class WeaponsListComponent implements OnInit {

  weapons: Weapon[];
  weaponsSubscription: Subscription;

  constructor(private weaponsService: WeaponsService, private router: Router) { }

  ngOnInit(): void {
    this.weaponsSubscription = this.weaponsService.weaponsSubject.subscribe(
      (data) => {
        this.weapons = data;
      }
    );
    this.weaponsService.getWeapons();
    this.weaponsService.emitWeapons();
  }

  onViewWeapon(weapon: Weapon): void {
    this.weaponsService.weaponViewed = weapon;
    this.router.navigate(['/encyclopedia', 'weapons', weapon.name.toLowerCase()]);
  }

}
