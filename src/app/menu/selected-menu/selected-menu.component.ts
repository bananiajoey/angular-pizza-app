import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MenuService } from './../../@shared/menu.service';

@Component({
  selector: 'app-selected-menu',
  templateUrl: './selected-menu.component.html',
  styleUrls: ['./selected-menu.component.css']
})
export class SelectedMenuComponent implements OnInit {
  @Input() selectedPizza: any;

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
  }

  addToCart(e): void {
    this.menuService.setOrder(this.selectedPizza);
  }

}
