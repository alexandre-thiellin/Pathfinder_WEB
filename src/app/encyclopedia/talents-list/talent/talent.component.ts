import { Component, OnInit } from '@angular/core';
import {Talent} from '../../../model/talent.model';
import {TalentsService} from '../../../services/talents.service';

@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.scss']
})
export class TalentComponent implements OnInit {

  talent: Talent;

  constructor(private talentsService: TalentsService) { }

  ngOnInit(): void {
    this.talentsService.getTalentById(this.talentsService.talentViewed.id).then(
      (data) => {
        this.talent = data;
      }
    );
  }

}
