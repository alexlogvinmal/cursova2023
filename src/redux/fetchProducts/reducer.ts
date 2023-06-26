import { Dispatch } from 'redux';
import { getDocs } from 'firebase/firestore';
import { productsCollection } from '../../api/firebase'; 


enum ProductsActionTypes {
    FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED',
  }

export const fetchProductsRequest = () => ({
  type: ProductsActionTypes.FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (data: any) => ({
  type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: data,
});

export const fetchProductsFailed = (error: string) => ({
  type: ProductsActionTypes.FETCH_PRODUCTS_FAILED,
  payload: error,
});

export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchProductsRequest()); 
    try {
      const data = await (await getDocs(productsCollection)).docs.map((items) => ({ ...items.data(), id: items.id }))
      dispatch(fetchProductsSuccess(data));
    } catch (error:any) {
      dispatch(fetchProductsFailed(error.message));
    }
  };
};