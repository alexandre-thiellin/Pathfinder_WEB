import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Skill} from '../../model/skill.model';
import {SkillsService} from '../../services/skills.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {

  skills: Skill[];
  skillsSubscription: Subscription;

  constructor(private skillsService: SkillsService, private router: Router) { }

  ngOnInit(): void {
    this.skillsSubscription = this.skillsService.skillsSubject.subscribe(
      (data) => {
        this.skills = data;
      }
    );
    this.skillsService.getSkills();
    this.skillsService.emitSkills();
  }

  onViewSkill(skill: Skill): void {
    this.skillsService.skillViewed = skill;
    this.router.navigate(['/encyclopedia', 'skills', skill.name.toLowerCase()]);
  }

}
