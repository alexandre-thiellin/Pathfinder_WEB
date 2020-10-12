import { Component, OnInit } from '@angular/core';
import {Weapon} from '../../../model/weapon.model';
import {WeaponsService} from '../../../services/weapons.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss']
})
export class WeaponComponent implements OnInit {

  weapon: Weapon;

  constructor(private weaponsService: WeaponsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.weaponsService.getWeaponById(this.activatedRoute.snapshot.params.id).then(
      (data) => {
        this.weapon = data;
      }
    );
  }

}
