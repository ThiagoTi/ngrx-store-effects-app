import { ActionReducerMap } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducers';

export interface ProductsStore {
  pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductsStore> = {
  pizzas: fromPizzas.reducer
};
