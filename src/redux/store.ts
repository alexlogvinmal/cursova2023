import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { fetchProductsReducer } from './fetchProducts/action';
import { fetchSellersReducer } from './fetchSellers/action';
import { setUpdateReducer } from './reducer/setUpdate';
import { setOpenModalCreateZvitReducer } from './reducer/setOpenModalCreateZvit';
import { setSelectedReducer } from './reducer/setSelected';
import { setOpenModalZvitReducer } from './reducer/setOpenModalZvit';
import { setOpenModalAddProductReducer } from './reducer/setOpenModalAddProduct';
import { setOpenModalAddSellerReducer } from './reducer/setOpenModalAddSeller';




const rootReducer = combineReducers({
   fetchProductsReducer, fetchSellersReducer, setUpdateReducer, setOpenModalCreateZvitReducer, setSelectedReducer, setOpenModalZvitReducer, setOpenModalAddProductReducer, setOpenModalAddSellerReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']