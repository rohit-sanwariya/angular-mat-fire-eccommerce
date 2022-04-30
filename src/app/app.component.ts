import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsStateSchema } from './Interfaces/products-state-schema';
import { FireCrudService } from './Services/fire-crud.service';
import { loadProductStart, loadProductSuccess } from './Store/products/products.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    products$:any
   constructor(
     private firecrud:FireCrudService,
     private store:Store<{'products':ProductsStateSchema}>,
     ){
this.store.dispatch(loadProductStart())
this.products$ = this.firecrud.getProducts()





   }
}
