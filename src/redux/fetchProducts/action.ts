export interface ProductListTypeNew {
    id: string,
    name: string,
    price: number,
    seller: string,
    stock: number
  }
 export interface ProductsState {
    data: ProductListTypeNew[];
    loading: boolean;
    error: string | null;
  }
  
   enum ProductsActionTypes {
    FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED',
  }

const initialState: ProductsState = {
    data: [],
    loading: false,
    error: null,
  };
  
  export const fetchProductsReducer = (state = initialState, action: any): ProductsState => {
    switch (action.type) {
      case ProductsActionTypes.FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case ProductsActionTypes.FETCH_PRODUCTS_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };