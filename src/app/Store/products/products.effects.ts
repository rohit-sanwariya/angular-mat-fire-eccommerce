import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap, tap } from "rxjs";
import { FireCrudService } from "src/app/Services/fire-crud.service";
import { loadProductStart,loadProductFailed,loadProductSuccess } from "./products.actions";


 @Injectable()
 export class ProductsEffects{

  loadMovies$ = createEffect(()=>{
      return this.actions$.pipe(
        ofType(loadProductStart),
        mergeMap(
          ()=>this.service.getProducts().pipe(
            tap(products=>console.log(products)),
            map((products:any)=>   loadProductSuccess(products)),
            catchError(()=>EMPTY)
          )
        )
      )
    }
  )
     constructor(
       private actions$:Actions,
       private service:FireCrudService
       ){

     }
 }
