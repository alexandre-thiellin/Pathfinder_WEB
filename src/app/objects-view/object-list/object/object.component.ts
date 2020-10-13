import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ObjectsService} from '../../../services/objects.service';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

  object: any;
  url: string[];
  type: string;

  constructor(private objectsService: ObjectsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.url = this.router.url.split('/');
    console.log(this.url[this.url.length - 2]);
    this.type = this.url[this.url.length - 2];
    this.objectsService.getObjectById(this.type, this.activatedRoute.snapshot.params.id).then(
      (data) => {
        this.object = data;
      }
    );
  }

  onDetails(route: string): void {
    this.router.navigate([route]);
  }
}
