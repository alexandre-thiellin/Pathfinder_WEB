import { Component, OnInit } from '@angular/core';
import {Character} from '../model/character.model';
import {CharactersService} from '../services/characters.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

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

}
