import {Component, inject, Input, signal, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Product} from '../../models/product.module';
import {CartService} from '../../services/cart.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total

  toggleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }
}
