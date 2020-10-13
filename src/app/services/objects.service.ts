import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {PathfinderApiService} from './pathfinder-api.service';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {

  objects: any[] = [];
  objectsSubject = new Subject<any[]>();

  constructor(private pathfinderApi: PathfinderApiService) { }

  emitObjects(): void {
    this.objectsSubject.next(this.objects);
  }

  getObjects(type: string): void {
    this.pathfinderApi.getObjects(type).subscribe(
      (data) => {
        this.objects = data;
        this.emitObjects();
      }
    );
  }

  getObjectById(type: string, id: number): Promise<any> {
    return new Promise<any>(
      (resolve, reject) => {
        this.pathfinderApi.getObjectById(type, id).subscribe(
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
