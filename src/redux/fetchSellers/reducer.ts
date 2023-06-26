import { Dispatch } from 'redux';
import { getDocs } from 'firebase/firestore';
import { sellersCollection } from '../../api/firebase'; 


enum SellersActionTypes {
  FETCH_SELLERS_REQUEST = 'FETCH_SELLERS_REQUEST',
  FETCH_SELLERS_SUCCESS = 'FETCH_SELLERS_SUCCESS',
  FETCH_SELLERS_FAILED = 'FETCH_SELLERS_FAILED',
}

export const fetchSellersRequest = () => ({
  type: SellersActionTypes.FETCH_SELLERS_REQUEST,
});

export const fetchSellersSuccess = (data: any) => ({
  type: SellersActionTypes.FETCH_SELLERS_SUCCESS,
  payload: data,
});

export const fetchSellersFailed = (error: string) => ({
  type: SellersActionTypes.FETCH_SELLERS_FAILED,
  payload: error,
});

export const fetchSellers = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchSellersRequest()); 
    try {
      const data = await (await getDocs(sellersCollection)).docs.map((sellers) => ({ ...sellers.data(), id: sellers.id }))
      dispatch(fetchSellersSuccess(data));
    } catch (error:any) {
      dispatch(fetchSellersFailed(error.message));
    }
  };
};