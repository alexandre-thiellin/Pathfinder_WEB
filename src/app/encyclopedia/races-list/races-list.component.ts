import { Component, OnInit } from '@angular/core';
import {RacesService} from '../../services/races.service';
import {Race} from '../../model/race.model';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-races-list',
  templateUrl: './races-list.component.html',
  styleUrls: ['./races-list.component.scss']
})
export class RacesListComponent implements OnInit {

  races: Race[] = [];
  racesSubscription: Subscription;

  constructor(private racesService: RacesService, private router: Router) { }

  ngOnInit(): void {
    this.racesSubscription = this.racesService.racesSubject.subscribe(
      (races: Race[]) => {
        this.races = races;
      }
    );
    this.racesService.getRaces();
    this.racesService.emitRaces();
  }

  onViewRace(race: Race): void {
    this.racesService.raceViewed = race;
    this.router.navigate(['/encyclopedia', 'races', race.name.toLowerCase()]);
  }
}
