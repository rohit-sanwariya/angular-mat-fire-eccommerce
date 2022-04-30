import { Action, createReducer, on } from "@ngrx/store";

import { ProductsStateSchema } from "src/app/Interfaces/products-state-schema";
import { ProductSchema } from "src/app/Interfaces/productSchema";
import { loadProductStart, loadProductSuccess } from "./products.actions";




const product:ProductSchema =
{
  title:'',
  desc:'',
  img:'',
  categories:'',
  size:'',
  color:'',
  price:'',
}

const inititalState:ProductsStateSchema = {
  loading:false,
  error:false,
  products:[]
}


export const productReducer = createReducer(
  inititalState,
  on(loadProductStart,(state:any)=>{

    return {...inititalState,loading:true}
  }),
  on(loadProductSuccess,(state:any,action:Action)=>{
      const {type,...payload} = {...action}
  

    return {...inititalState,loading:false,products:Object.values(payload)}
  }),

)



export default productReducer
