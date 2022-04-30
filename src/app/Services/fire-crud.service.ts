import { Injectable } from '@angular/core';
import {Firestore, collection, doc,addDoc, CollectionReference, collectionData} from '@angular/fire/firestore'
import { Observable } from 'rxjs';

import { ProductSchema } from '../Interfaces/productSchema';

@Injectable({
  providedIn: 'root'
})
export class FireCrudService {
  products$!: any
  collectionRef!:CollectionReference

  constructor(
    private firestore:Firestore,

    ) {
// const docRef = doc(this.firestore,'products')
this.collectionRef = collection(this.firestore,'products')



  }

  addProduct(product:ProductSchema){
      addDoc(this.collectionRef,product)
  }

  getProducts(){
   return collectionData(this.collectionRef)
  }
}
