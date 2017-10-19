import { Subject, Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { MenuService } from './../@shared/menu.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
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

  checkOut(e): void {
    this.myOrder.checkOut = true;
  }

}
