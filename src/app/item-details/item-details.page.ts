import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collection, doc, docData, getDoc } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { DataService, Product } from '../services/data.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage {
  itemShared = [];
  productId: string;
  productNombre: string;
  productPrecio: string;
  productDescripcion: string;
  productImagen1: string;
  productImagen2: string;
  productImagen3: string;

  @Input() id: Product;
  products = [];
  productSelected;
  data: any;
  product: Product = null;

  cartText: string;

  constructor(
    public nav: NavController,

  ) {
    this.productId = sessionStorage.getItem('productId');
    this.productNombre = sessionStorage.getItem('productNombre');
    this.productPrecio = sessionStorage.getItem('productPrecio');
    this.productDescripcion = sessionStorage.getItem('productDescripcion');
    this.productImagen1 = sessionStorage.getItem('productImagen1');
    this.productImagen2 = sessionStorage.getItem('productImagen2');
    this.productImagen3 = sessionStorage.getItem('productImagen3');
    

    locations: { 
      
      
  }

  }
  addToCart(id, nombre, precio, imagen1) {
    
    sessionStorage.setItem('productId',id);
    sessionStorage.setItem('productNombre',nombre);
    sessionStorage.setItem('productPrecio',precio);
    sessionStorage.setItem('productImagen1',imagen1);
    this.nav.navigateForward('/my-cart/id');
      
    


  }

}
