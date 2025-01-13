import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.module';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor(){
    const initProducts: Product[]= [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 100,
        img: 'https://picsum.photos/640/640?r=2',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 200,
        img: 'https://picsum.photos/640/640?r=5',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 200,
        img: 'https://picsum.photos/640/640?r=10',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 4',
        price: 200,
        img: 'https://picsum.photos/640/640?r=12',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 5',
        price: 200,
        img: 'https://picsum.photos/640/640?r=54',
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }

  addToCart(product: Product){
    this.cart.update(prevState => [...prevState, product]);
  }
}
