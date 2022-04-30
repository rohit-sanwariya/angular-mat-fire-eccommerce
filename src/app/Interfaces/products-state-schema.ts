import { ProductSchema } from "./productSchema";

export interface ProductsStateSchema {
  loading:boolean,
  error:boolean,
  products:ProductSchema[]
}
