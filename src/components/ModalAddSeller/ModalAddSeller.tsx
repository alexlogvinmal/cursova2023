import styles from '../../styles.module.scss';
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { setOpenModalAddSeller } from '../../redux/reducer/setOpenModalAddSeller';
import { addDoc } from 'firebase/firestore';
import { sellersCollection } from '../../api/firebase';

export const ModalAddSeller = () => {
    const dispatch = useAppDispatch();
    const openModal = useAppSelector(state => state.setOpenModalAddSellerReducer.openModalAddSeller);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = async () => {
        if (inputValue.trim() === '') {
            return;
        }

        let obj = {
            name: inputValue.trim()
        };
        try {
            await addDoc(sellersCollection, obj);
            dispatch(setOpenModalAddSeller(false));
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
                            <div className={styles.popup_all}>
                                <div className={styles.popup_close} onClick={e => dispatch(setOpenModalAddSeller(false))}>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="u-w-auto" data-reactid=".0.1.0.$=10.0.0.0.0.0"><circle cx="18" cy="18" r="18" fill="#fff" data-reactid=".0.1.0.$=10.0.0.0.0.0.0"></circle><path d="M25 12.4L23.6 11 18 16.6 12.4 11 11 12.4l5.6 5.6-5.6 5.6 1.4 1.4 5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6 5.6-5.6z" fill="#1B1B20" data-reactid=".0.1.0.$=10.0.0.0.0.0.1"></path></svg>
                                </div>
                                <div className={styles.popup_text}>
                                    <p className={styles.p4}>Додати продавця</p>
                                    <span className={styles.span_text}> <p>Введіть повне ім'я продавця або компанію</p></span>
                                    <input type="text" className={styles.input_modal} placeholder="Повне ім'я або компанія" maxLength={30} required onChange={e => { setInputValue(e.target.value) }} autoFocus/>
                                    <div className={styles.for_bttn}>
                                        <button type='submit' className={styles.bttn_green} onClick={handleSubmit}>Додати</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null}
        </div>
    )

}