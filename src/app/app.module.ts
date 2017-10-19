import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MenuItemsComponent } from './menu/menu-items/menu-items.component';
import { SelectedMenuComponent } from './menu/selected-menu/selected-menu.component';

import { MenuService } from './@shared/menu.service';
import { CartItemComponent } from './shopping-cart/cart-item/cart-item.component';
import { DeliveryComponent } from './shopping-cart/delivery/delivery.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderedItemComponent } from './order-summary/ordered-item/ordered-item.component';
import { DeliveryItemComponent } from './order-summary/delivery-item/delivery-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemsComponent,
    SelectedMenuComponent,
    CartItemComponent,
    DeliveryComponent,
    OrderSummaryComponent,
    OrderedItemComponent,
    DeliveryItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ MenuService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
