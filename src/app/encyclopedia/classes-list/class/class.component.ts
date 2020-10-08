import { Component, OnInit } from '@angular/core';
import {Class} from '../../../model/class.model';
import {ClassesService} from '../../../services/classes.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  classEl: Class;

  constructor(private classesService: ClassesService) { }

  ngOnInit(): void {
    this.classesService.getClassById(this.classesService.classViewed.id).then(
      (data) => {
        this.classEl = data;
      }
    );
  }
}
