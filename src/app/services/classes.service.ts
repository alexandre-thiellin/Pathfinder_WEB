import { Injectable } from '@angular/core';
import {Class} from '../model/class.model';
import {Subject} from 'rxjs';
import {PathfinderApiService} from './pathfinder-api.service';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  classes: Class[] = [];
  classesSubject = new Subject<Class[]>();

  constructor(private pathfinderApi: PathfinderApiService) { }

  emitClasses(): void {
    this.classesSubject.next(this.classes);
  }

  getClasses(): void {
    this.pathfinderApi.getClasses().subscribe(
      (data) => {
        this.classes = data;
        this.emitClasses();
      }
    );
  }

  getClassById(id: number): Promise<Class> {
    return new Promise<Class>(
      (resolve, reject) => {
        this.pathfinderApi.getClassById(id).subscribe(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
}
