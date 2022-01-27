import { Component } from '@angular/core';
import { DataService } from '../services/data.service';


import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  textSearch = '';
  products = [];
  constructor(
    public nav: NavController,
    private dataService: DataService
    ) {
    this.dataService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

  viewProduct(id, nombre, precio, descripcion, imagen1, imagen2, imagen3) {
    sessionStorage.setItem('productId',id);
    sessionStorage.setItem('productNombre',nombre);
    sessionStorage.setItem('productPrecio',precio);
    sessionStorage.setItem('productDescripcion',descripcion);
    sessionStorage.setItem('productImagen1',imagen1);
    sessionStorage.setItem('productImagen2',imagen2);
    sessionStorage.setItem('productImagen3',imagen3);
    this.nav.navigateForward('/item-details/id');
  }
  buscar(event) {
    this.textSearch = event.detail.value;
  }

}
