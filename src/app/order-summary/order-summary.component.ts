import { MenuService } from './../@shared/menu.service';
import { Subject, Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  private myOrder: any;

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.myOrder$.takeUntil(this.destroyed$).subscribe(
      order => this.myOrder = order
    );
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
