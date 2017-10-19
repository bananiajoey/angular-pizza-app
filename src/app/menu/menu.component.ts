import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public myPizza: any;

  constructor() { }

  ngOnInit() {
  }

  public displayMyPizza(e): void {
    this.myPizza = e;
  }

  public changePizzaSize(e): void {
    this.myPizza.size = e.desc;
    this.myPizza.sizePrice = this.myPizza.price + e.price;
  }

}
