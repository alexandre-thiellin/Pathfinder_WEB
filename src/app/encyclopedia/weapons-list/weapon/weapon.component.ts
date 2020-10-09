import { Component, OnInit } from '@angular/core';
import {Weapon} from '../../../model/weapon.model';
import {WeaponsService} from '../../../services/weapons.service';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss']
})
export class WeaponComponent implements OnInit {

  weapon: Weapon;

  constructor(private weaponsService: WeaponsService) { }

  ngOnInit(): void {
    this.weaponsService.getWeaponById(this.weaponsService.weaponViewed.id).then(
      (data) => {
        this.weapon = data;
      }
    );
  }

}
