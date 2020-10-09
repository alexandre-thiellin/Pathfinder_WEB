import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Spell} from '../../model/spell.model';
import {SpellsService} from '../../services/spells.service';

@Component({
  selector: 'app-spells-list',
  templateUrl: './spells-list.component.html',
  styleUrls: ['./spells-list.component.scss']
})
export class SpellsListComponent implements OnInit {

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

  onViewSpell(spell: Spell): void {
    this.spellsService.spellViewed = spell;
    this.router.navigate(['/encyclopedia', 'spells', spell.name.toLowerCase()]);
  }

}
