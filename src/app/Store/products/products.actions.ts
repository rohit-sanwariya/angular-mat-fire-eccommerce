import { createAction } from "@ngrx/store";

export const loadProductSuccess = createAction(
  '[Products Component] Load Success',
  (payload)=>payload
  )
export const loadProductStart = createAction(
  '[Products Component] Load Start'
  )
export const loadProductFailed = createAction(
  '[Products Component] Load Failed'
  )




