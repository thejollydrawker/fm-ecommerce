import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

interface Cart {
  items: CartItem[];
}

interface CartItem {
    id: number,
    name: string;
    description: string;
    price: number;
    quantity: number
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cart: Cart = {
    items: [
      {
        id:1,
        name: 'Fall Limited Edition Sneakers',
        description :'',
        price: 125.00,
        quantity: 3
      }
    ] 
  };
  isOpen: boolean = false;

  total: number = this.cart.items.reduce((a,v) => a+ v.quantity, 0);

  toggleCart(): void {
    this.isOpen = !this.isOpen;
  }
}
