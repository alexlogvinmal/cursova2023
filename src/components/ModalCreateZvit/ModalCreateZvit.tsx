import styles from '../../styles.module.scss';
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { setOpenModalCreateZvit } from '../../redux/reducer/setOpenModalCreateZvit';
import { fetchSellers } from '../../redux/fetchSellers/reducer';
import { setSelected } from '../../redux/reducer/setSelected';
import { setOpenModalZvit } from '../../redux/reducer/setOpenModalZvit';

export const ModalCreateZvit = () => {
    const dispatch = useAppDispatch();
    const sellersList = useAppSelector(state => state.fetchSellersReducer.data);
    const openModal = useAppSelector(state => state.setOpenModalCreateZvitReducer.openModalCreateZvit);
    const [selected, setSelect] = useState('');
    let update = 0;
    useEffect(() => {
        dispatch(fetchSellers());
    }, [update]);

    const handleSubmit = () => {
        if (selected !== '') {
            dispatch(setSelected(selected));
            dispatch(setOpenModalCreateZvit(false));
            dispatch(setOpenModalZvit(true));
        }
    };

    return (
        <div>
            {openModal ?
                <div className={styles.popup_container}>
                    <div className={styles.popup_overlay}>
                        <div className={styles.popup_wrapper}>
                            <div className={styles.popup_all}>
                                <div className={styles.popup_close} onClick={e => dispatch(setOpenModalCreateZvit(false))}>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="u-w-auto" data-reactid=".0.1.0.$=10.0.0.0.0.0"><circle cx="18" cy="18" r="18" fill="#fff" data-reactid=".0.1.0.$=10.0.0.0.0.0.0"></circle><path d="M25 12.4L23.6 11 18 16.6 12.4 11 11 12.4l5.6 5.6-5.6 5.6 1.4 1.4 5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6 5.6-5.6z" fill="#1B1B20" data-reactid=".0.1.0.$=10.0.0.0.0.0.1"></path></svg>
                                </div>
                                <div className={styles.popup_text}>
                                    <p className={styles.p4}>Меню звіту</p>
                                    <span className={styles.span_text}> <p>Виберіть продавця, за яким хочете зробити звіт</p></span>
                                    <select onChange={e => setSelect(e.target.value)}><option value={''}></option>{sellersList.map(e => <option key={e.id} value={e.name}>{e.name}</option>)}</select>
                                    <p>&nbsp;</p>
                                    <div className={styles.for_bttn}>
                                        <button type='submit' className={styles.bttn_green} onClick={handleSubmit}>Створити звіт</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null}
        </div>
    )

}