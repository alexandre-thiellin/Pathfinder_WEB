import { Component, OnInit } from '@angular/core';
import {Race} from '../../../model/race.model';
import {RacesService} from '../../../services/races.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  race: Race;

  constructor(private racesService: RacesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.racesService.getRaceById(this.activatedRoute.snapshot.params.id).then(
      (race: Race) => {
        this.race = race;
      }
    );
  }

}
