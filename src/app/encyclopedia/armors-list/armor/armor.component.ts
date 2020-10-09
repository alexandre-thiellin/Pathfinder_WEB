import { Component, OnInit } from '@angular/core';
import {Armor} from '../../../model/armor.model';
import {ArmorsService} from '../../../services/armors.service';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.scss']
})
export class ArmorComponent implements OnInit {

  armor: Armor;

  constructor(private armorsService: ArmorsService) { }

  ngOnInit(): void {
    this.armorsService.getArmorById(this.armorsService.armorViewed.id).then(
      (data) => {
        this.armor = data;
        console.log(this.armor.bonus_ca);
      }
    );
  }

}
