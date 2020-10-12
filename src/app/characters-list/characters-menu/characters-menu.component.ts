import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Character} from '../../model/character.model';
import {Subscription} from 'rxjs';
import {CharactersService} from '../../services/characters.service';

@Component({
  selector: 'app-characters-menu',
  templateUrl: './characters-menu.component.html',
  styleUrls: ['./characters-menu.component.scss']
})
export class CharactersMenuComponent implements OnInit, OnDestroy {

  characters: Character[] = [];
  charactersSubscription: Subscription;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersSubscription = this.charactersService.charactersSubject.subscribe(
      (data) => {
        this.characters = data;
      }
    );
    this.charactersService.getCharacters();
    this.charactersService.emitCharacters();
  }

  ngOnDestroy(): void {
    this.charactersSubscription.unsubscribe();
  }
}
