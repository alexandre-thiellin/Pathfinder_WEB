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

  constructor() { }

  ngOnInit(): void {
  }

}
