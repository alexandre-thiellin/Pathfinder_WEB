import { Component, OnInit } from '@angular/core';
import {Skill} from '../../../model/skill.model';
import {SkillsService} from '../../../services/skills.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  skill: Skill;

  constructor(private skillsService: SkillsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.skillsService.getSkillById(this.activatedRoute.snapshot.params.id).then(
      (data) => {
        this.skill = data;
      }
    );
  }

}
