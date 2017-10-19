import { MenuService } from './../../@shared/menu.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css'],
  providers: [MenuService]
})
export class MenuItemsComponent implements OnInit {
  private myPizzas: any;
  private pizzaSize = {'size' : 'reg', 'desc' : 'Regular(9″)', 'price' : 0};

  @Output() selectPizzaEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectPizzaSizeEvent: EventEmitter<any>= new EventEmitter<any>();

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.myPizzas = this.menuService.getPizzas();
  }

  setPizza(e, selectedPizza): void {
    this.setPizzaSize(e);

    selectedPizza.size = this.pizzaSize.desc;
    selectedPizza.sizePrice = selectedPizza.price + this.pizzaSize.price;
    selectedPizza.checkOut = false;
    this.selectPizzaEvent.emit(selectedPizza);
  }

  setPizzaSize(e): void {
    switch (this.pizzaSize.size) {
      case 'reg':
        this.pizzaSize.price = 0;
        this.pizzaSize.desc = 'Regular(9″)';
        break;
      case 'fam':
        this.pizzaSize.price = 50;
        this.pizzaSize.desc = 'Family(12″)';
        break;
      case 'par':
        this.pizzaSize.price = 100;
        this.pizzaSize.desc = 'Party(14″)';
        break;
    }

    this.selectPizzaSizeEvent.emit(this.pizzaSize);
  }
}
