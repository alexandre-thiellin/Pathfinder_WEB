import { Component, OnInit } from '@angular/core';
import {Spell} from '../../../model/spell.model';
import {SpellsService} from '../../../services/spells.service';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss']
})
export class SpellComponent implements OnInit {

  spell: Spell;

  constructor(private spellsService: SpellsService) { }

  ngOnInit(): void {
    this.spellsService.getSpellById(this.spellsService.spellViewed.id).then(
      (data) => {
        this.spell = data;
      }
    );
  }

}
