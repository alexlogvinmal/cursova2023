export interface SellerListTypeNew {
    id: string,
    name: string
  }
 export interface SellersState {
    data: SellerListTypeNew[];
    loading: boolean;
    error: string | null;
  }
  
   enum SellersActionTypes {
    FETCH_SELLERS_REQUEST = 'FETCH_SELLERS_REQUEST',
    FETCH_SELLERS_SUCCESS = 'FETCH_SELLERS_SUCCESS',
    FETCH_SELLERS_FAILED = 'FETCH_SELLERS_FAILED',
  }

const initialState: SellersState = {
    data: [],
    loading: false,
    error: null,
  };
  
  export const fetchSellersReducer = (state = initialState, action: any): SellersState => {
    switch (action.type) {
      case SellersActionTypes.FETCH_SELLERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case SellersActionTypes.FETCH_SELLERS_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case SellersActionTypes.FETCH_SELLERS_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };