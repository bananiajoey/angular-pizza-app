import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
  private order: Subject<any[]> = new Subject<any[]>();
  public myOrder$ = this.order.asObservable();

  constructor() { }

  getPizzas(): any {
    return require('../../assets/mock-data/mock-pizza.json');
  }

  getToppingsDisplay(myToppings: string[]): string {
    return myToppings.join(', ');
  }

  setOrder(orderedPizza): any {
    this.order.next(orderedPizza);
  }
}
