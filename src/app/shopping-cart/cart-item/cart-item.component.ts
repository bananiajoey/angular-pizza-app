import { Subject, Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { MenuService } from './../../@shared/menu.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit  {
  private totalCost: number;

  @Input() order: any;

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
  }

  displayToppings(toppings: string[]): string {
    return this.menuService.getToppingsDisplay(toppings);
  }

  getTotalCost(e: any): void {
    this.order.totalCost = this.order.price * e.target.value;
    this.order.quantity = e.target.value;
    this.totalCost = this.order.totalCost;
  }
}
