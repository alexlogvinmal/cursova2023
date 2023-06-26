import styles from '../../styles.module.scss';
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { setOpenModalAddProduct } from '../../redux/reducer/setOpenModalAddProduct';
import { addDoc } from 'firebase/firestore';
import { productsCollection } from '../../api/firebase';
import { setUpdate } from '../../redux/reducer/setUpdate';

export const ModalAddProduct = () => {
    const dispatch = useAppDispatch();
    const sellersList = useAppSelector(state => state.fetchSellersReducer.data);
    const openModal = useAppSelector(state => state.setOpenModalAddProductReducer.openModalAddProduct);
    const [selected, setSelect] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputPrice, setInputPrice] = useState(0);
    const [inputStock, setInputStock] = useState(0);

    const handleSubmit = async () => {
        if (inputName.trim() === '' || inputPrice <= 0 || inputStock <= 0 || selected === '') {
            return;
        }

        let obj = {
            name: inputName.trim(),
            price: inputPrice,
            seller: selected,
            stock: inputStock
        };
        try {
            await addDoc(productsCollection, obj);
            dispatch(setOpenModalAddProduct(false));
            dispatch(setUpdate());
        } catch (err) {
            console.error(err)
        }
    };

    return (
        <div>
            {openModal ?
                <div className={styles.popup_container}>
                    <div className={styles.popup_overlay}>
                        <div className={styles.popup_wrapper}>
                            <div className={styles.popup_all_aprdct}>
                                <div className={styles.popup_close} onClick={e => dispatch(setOpenModalAddProduct(false))}>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="u-w-auto" data-reactid=".0.1.0.$=10.0.0.0.0.0"><circle cx="18" cy="18" r="18" fill="#fff" data-reactid=".0.1.0.$=10.0.0.0.0.0.0"></circle><path d="M25 12.4L23.6 11 18 16.6 12.4 11 11 12.4l5.6 5.6-5.6 5.6 1.4 1.4 5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6 5.6-5.6z" fill="#1B1B20" data-reactid=".0.1.0.$=10.0.0.0.0.0.1"></path></svg>
                                </div>
                                <div className={styles.popup_text}>
                                    <p className={styles.p4}>Додати товар</p>
                                    <span className={styles.span_text}> <p>Виберіть продавця та додайте товар</p></span>
                                    <select onChange={e => setSelect(e.target.value)}><option value={''}>Виберіть продавця</option>{sellersList.map(e => <option key={e.id} value={e.name}>{e.name}</option>)}</select>
                                    <input type="text" className={styles.input_modal} placeholder="Назва товару" maxLength={50} required onChange={e => { setInputName(e.target.value) }}/>
                                    <input type="number" className={styles.input_modal} placeholder="Ціна товару в $" required onChange={e => { setInputPrice(+e.target.value) }}/>
                                    <input type="number" className={styles.input_modal} placeholder="Кількість товару" required onChange={e => { setInputStock(+e.target.value) }}/>
                                    <div className={styles.for_bttn}>
                                        <button type='submit' className={styles.bttn_green} onClick={handleSubmit}>Додати товар</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null}
        </div>
    )

}