import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { LightboxComponent } from '../lightbox/lightbox.component';

@Component({
  selector: 'app-pdp',
  standalone: true,
  imports: [
    LightboxComponent
  ],
  templateUrl: './pdp.component.html',
  styleUrl: './pdp.component.scss'
})
export class PdpComponent {
  counter: number = 0;

  constructor(private cartSrv: CartService){}

  addCounter(): void {
    this.counter += 1;
  }

  removeCounter(): void {
    if (this.counter === 0) return;
      this.counter -= 1;
  }

  addToCart(): void {
    if (this.counter > 0) {
      this.cartSrv.addToCart({
        id:1,
        name: 'Fall Limited Edition Sneakers',
        description :'',
        price: 125.00,
        quantity: this.counter
      });
      this.counter = 0;
    }
    
  }
}
