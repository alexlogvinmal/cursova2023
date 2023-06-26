import styles from '../../styles.module.scss';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { ProductItem } from './ProductItem';
import { fetchProducts } from '../../redux/fetchProducts/reducer';


export const ProductList = () => {
    
    const dispatch = useAppDispatch();
    const productsList = useAppSelector(state => state.fetchProductsReducer.data);
    const update = useAppSelector(state => state.setUpdateReducer.update);
  

    useEffect(() => {
        dispatch(fetchProducts());
    }, [update]);


    return (
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Товар</th>
                        <th>Продавець</th>
                        <th>Ціна</th>
                        <th>Кількість</th>
                    </tr>
                </thead>
                <tbody>
                    {productsList.map(product => <ProductItem {...product} key={product.id} />)}
                </tbody>
            </table>
    )
}