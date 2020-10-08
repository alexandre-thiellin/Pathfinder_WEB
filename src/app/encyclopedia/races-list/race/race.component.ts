import { Component, OnInit } from '@angular/core';
import {Race} from '../../../model/race.model';
import {RacesService} from '../../../services/races.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  race: Race;

  constructor(private racesService: RacesService) { }

  ngOnInit(): void {
    this.racesService.getRaceById(this.racesService.raceViewed.id).then(
      (race: Race) => {
        this.race = race;
      }
    );
  }

}
