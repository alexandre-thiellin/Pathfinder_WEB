import {Component, OnDestroy, OnInit} from '@angular/core';
import {RacesService} from '../../services/races.service';
import {Race} from '../../model/race.model';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-races-list',
  templateUrl: './races-list.component.html',
  styleUrls: ['./races-list.component.scss']
})
export class RacesListComponent implements OnInit, OnDestroy {

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

  onViewRace(id: number): void {
    this.router.navigate(['/encyclopedia', 'races', id]);
  }

  ngOnDestroy(): void {
    this.racesSubscription.unsubscribe();
  }
}
