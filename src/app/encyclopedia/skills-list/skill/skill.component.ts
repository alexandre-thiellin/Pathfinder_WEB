import { Component, OnInit } from '@angular/core';
import {Skill} from '../../../model/skill.model';
import {SkillsService} from '../../../services/skills.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  skill: Skill;

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.skillsService.getSkillById(this.skillsService.skillViewed.id).then(
      (data) => {
        this.skill = data;
      }
    );
  }

}
