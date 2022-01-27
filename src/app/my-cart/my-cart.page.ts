import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../services/data.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage {

  itemShared = [];
  productId: string;
  productNombre: string;
  productPrecio: string;
  productImagen1: string;
  @Input() id: Product;
  products = [];

  constructor() { 

    this.itemShared.map( () => {
      this.productId = sessionStorage.getItem('productId');
      this.productNombre = sessionStorage.getItem('productNombre');
      this.productPrecio = sessionStorage.getItem('productPrecio');
      this.productImagen1 = sessionStorage.getItem('productImagen1');
    })
    console.log(this.itemShared);
    
    
    
  }


}
