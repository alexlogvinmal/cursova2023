import styles from '../../styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { setOpenModalZvit } from '../../redux/reducer/setOpenModalZvit';
import { ModalZvitItem } from './ModalZvitItem';

export const ModalZvit = () => {
    const dispatch = useAppDispatch();
    const selected = useAppSelector(state => state.setSelectedReducer.selected);
    const productsList = useAppSelector(state => state.fetchProductsReducer.data);
    const openModal = useAppSelector(state => state.setOpenModalZvitReducer.openModalZvit);
    const newProductList = productsList.filter(e => e.seller === selected);
    let value = 0;
    let sum = 0;

    newProductList.forEach(e=>{
        value+=e.stock;
        sum+=(e.price*e.stock);
    })


    return (
        <div>
            {openModal ?
                <div className={styles.popup_container}>
                    <div className={styles.popup_overlay}>
                        <div className={styles.popup_wrapper}>
                            <div className={styles.popup_all_new}>
                                <div className={styles.popup_close} onClick={e => dispatch(setOpenModalZvit(false))}>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="u-w-auto" data-reactid=".0.1.0.$=10.0.0.0.0.0"><circle cx="18" cy="18" r="18" fill="#fff" data-reactid=".0.1.0.$=10.0.0.0.0.0.0"></circle><path d="M25 12.4L23.6 11 18 16.6 12.4 11 11 12.4l5.6 5.6-5.6 5.6 1.4 1.4 5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6 5.6-5.6z" fill="#1B1B20" data-reactid=".0.1.0.$=10.0.0.0.0.0.1"></path></svg>
                                </div>
                                <div className={styles.popup_text}>
                                    <p className={styles.p4}>{selected} звіт</p>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th>Товар</th>
                                                <th>Ціна</th>
                                                <th>Кількість</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {newProductList.map(product => <ModalZvitItem {...product} key={product.id} />)}
                                        </tbody>
                                    </table>
                                    <span className={styles.span_text_new}>
                                        <p>Видів товару: {newProductList.length}</p>
                                        <p>Кількість товару: {value}</p>
                                        <p>Всього товару на сумму: {sum}$</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null}
        </div>
    )

}