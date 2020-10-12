import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Talent} from '../../model/talent.model';
import {TalentsService} from '../../services/talents.service';

@Component({
  selector: 'app-talents-list',
  templateUrl: './talents-list.component.html',
  styleUrls: ['./talents-list.component.scss']
})
export class TalentsListComponent implements OnInit, OnDestroy {

  talents: Talent[];
  talentsSubscription: Subscription;

  constructor(private talentsService: TalentsService, private router: Router) { }

  ngOnInit(): void {
    this.talentsSubscription = this.talentsService.talentsSubject.subscribe(
      (data) => {
        this.talents = data;
      }
    );
    this.talentsService.getTalents();
    this.talentsService.emitTalents();
  }

  onViewTalent(id: number): void {
    this.router.navigate(['/encyclopedia', 'talents', id]);
  }

  ngOnDestroy(): void {
    this.talentsSubscription.unsubscribe();
  }
}
