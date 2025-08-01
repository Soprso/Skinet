import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { OrderSummaryComponent } from "../../shared/componnents/order-summary/order-summary.component";
import { EmptyStateComponent } from '../../shared/componnents/empty-state/empty-state.component';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent, EmptyStateComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartService= inject(CartService);

  
}



