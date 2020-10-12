import { Component, OnInit } from '@angular/core';
import {Armor} from '../../../model/armor.model';
import {ArmorsService} from '../../../services/armors.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.scss']
})
export class ArmorComponent implements OnInit {

  armor: Armor;

  constructor(private armorsService: ArmorsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.armorsService.getArmorById(this.activatedRoute.snapshot.params.id).then(
      (data) => {
        this.armor = data;
      }
    );
  }

}
