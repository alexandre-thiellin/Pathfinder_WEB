import { Component, OnInit } from '@angular/core';
import {Character} from '../../model/character.model';
import {CharactersService} from '../../services/characters.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: Character;

  constructor(private charactersService: CharactersService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      value => {
        this.charactersService.getCharacterById(value.id).then(
          (data) => {
            this.character = data;
          }
        );
      }
    );

  }

  onDetails(route: string): void {
    this.router.navigate([route]);
  }
}
