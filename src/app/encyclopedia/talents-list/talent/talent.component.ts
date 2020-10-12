import { Component, OnInit } from '@angular/core';
import {Talent} from '../../../model/talent.model';
import {TalentsService} from '../../../services/talents.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.scss']
})
export class TalentComponent implements OnInit {

  talent: Talent;

  constructor(private talentsService: TalentsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.talentsService.getTalentById(this.activatedRoute.snapshot.params.id).then(
      (data) => {
        this.talent = data;
      }
    );
  }

}
