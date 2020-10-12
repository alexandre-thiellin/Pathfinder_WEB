import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Spell} from '../../model/spell.model';
import {SpellsService} from '../../services/spells.service';

@Component({
  selector: 'app-spells-list',
  templateUrl: './spells-list.component.html',
  styleUrls: ['./spells-list.component.scss']
})
export class SpellsListComponent implements OnInit, OnDestroy {

  spells: Spell[];
  spellsSubscription: Subscription;

  constructor(private spellsService: SpellsService, private router: Router) { }

  ngOnInit(): void {
    this.spellsSubscription = this.spellsService.spellsSubject.subscribe(
      (data) => {
        this.spells = data;
      }
    );
    this.spellsService.getSpells();
    this.spellsService.emitSpells();
  }

  onViewSpell(id: number): void {
    this.router.navigate(['/encyclopedia', 'spells', id]);
  }

  ngOnDestroy(): void {
    this.spellsSubscription.unsubscribe();
  }
}
