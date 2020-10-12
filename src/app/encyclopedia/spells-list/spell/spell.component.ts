import { Component, OnInit } from '@angular/core';
import {Spell} from '../../../model/spell.model';
import {SpellsService} from '../../../services/spells.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss']
})
export class SpellComponent implements OnInit {

  spell: Spell;

  constructor(private spellsService: SpellsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.spellsService.getSpellById(this.activatedRoute.snapshot.params.id).then(
      (data) => {
        this.spell = data;
      }
    );
  }

}
