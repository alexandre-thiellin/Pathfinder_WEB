import {Component, OnDestroy, OnInit} from '@angular/core';
import {Armor} from '../../model/armor.model';
import {Subscription} from 'rxjs';
import {ArmorsService} from '../../services/armors.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-armors-list',
  templateUrl: './armors-list.component.html',
  styleUrls: ['./armors-list.component.scss']
})
export class ArmorsListComponent implements OnInit, OnDestroy {

  armors: Armor[] = [];
  armorsSubscription: Subscription;

  constructor(private armorsService: ArmorsService, private router: Router) { }

  ngOnInit(): void {
    this.armorsSubscription = this.armorsService.armorsSubject.subscribe(
      (data) => {
        this.armors = data;
      }
    );
    this.armorsService.getArmors();
    this.armorsService.emitArmors();
  }

  onViewArmor(id: number): void {
    this.router.navigate(['/encyclopedia', 'armors', id]);
  }

  ngOnDestroy(): void {
    this.armorsSubscription.unsubscribe();
  }
}
