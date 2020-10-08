import { Component, OnInit } from '@angular/core';
import {Class} from '../../model/class.model';
import {ClassesService} from '../../services/classes.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent implements OnInit {

  classes: Class[] = [];
  classesSubscription: Subscription;

  constructor(private classesService: ClassesService, private router: Router) { }

  ngOnInit(): void {
    this.classesSubscription = this.classesService.classesSubject.subscribe(
      (data) => {
        this.classes = data;
      }
    );
    this.classesService.getClasses();
    this.classesService.emitClasses();
  }

  onViewClass(classEl: Class): void {
    this.classesService.classViewed = classEl;
    this.router.navigate(['/encyclopedia', 'classes', classEl.name.toLowerCase()]);
  }
}
