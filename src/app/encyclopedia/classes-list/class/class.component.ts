import { Component, OnInit } from '@angular/core';
import {Class} from '../../../model/class.model';
import {ClassesService} from '../../../services/classes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  classEl: Class;

  constructor(private classesService: ClassesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.classesService.getClassById(this.activatedRoute.snapshot.params.id).then(
      (data) => {
        this.classEl = data;
      }
    );
  }
}
