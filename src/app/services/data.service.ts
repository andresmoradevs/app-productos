import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, docData, addDoc, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Product {
  id: string;
  nombre: string;
  precio: string;
  imagen?: {
    imagen1?: any,
    imagen2?: any,
    imagen3?: any
  }
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(
    private firestore: Firestore) { }

    getProducts(): Observable<Product[]> {
      const productRef = collection(this.firestore,'productos');
      return collectionData(productRef, { idField: 'id'}) as Observable<Product[]>;
    }

    getProductById(id) {
      const productDocRef = doc(this.firestore, `productos/${id}`);
      return docData(productDocRef, { idField: 'id' }) as Observable<Product>;
    }

    // addProduct(product: Product) {
    //   const productRef = collection(this.firestore,'productos');
    //   return addDoc(productRef, product)
    // }

    // deleteProduct(product: Product) {
    //   const productDocRef = doc(this.firestore, `productos/${product.id}`);
    //   return deleteDoc(productDocRef)
    // }
    // updateProduct(product: Product) {
    //   const productDocRef = doc(this.firestore, `productos/${product.id}`);
    // eslint-disable-next-line max-len
    //   return updateDoc(productDocRef, { nombre: product.nombre, precio: product.precio, imagen1: product.imagen.imagen1, descripcion: product.descripcion })

    // }


}
