import {Component, Input, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from '../../../products/components/product/product.component';

@Component({
  selector: 'app-counter',
  imports: [CommonModule, ProductComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';

  constructor() {
    // NO ASYNC, sirve para declarar variables directas
    // before render
    // corre una vez
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges){
    // before and during render, cada vez que enviemos un cambio lo detecta
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
  }

  ngOnInit(){
    // inicializador del componente (renderizarlo)
    // after render
    // corre una vez
    // perfecto para cosas asincronas (then, subs, fetch, api)
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);
  }

  ngAfterViewInit(){
    // after render
    // pregunta si los hijos ya fueron renderizados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    // cuando el componente se destruye como tal
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }

}
