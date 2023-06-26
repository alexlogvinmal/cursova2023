import styles from '../../styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { setOpenModalCreateZvit } from '../../redux/reducer/setOpenModalCreateZvit';
import { setOpenModalAddSeller } from '../../redux/reducer/setOpenModalAddSeller';
import { setOpenModalAddProduct } from '../../redux/reducer/setOpenModalAddProduct';

export const Header = () => {
    const dispatch = useAppDispatch();


    return (
        <div className={styles.for_bttn}>
            <button className={styles.bttn_blue} onClick={e=>dispatch(setOpenModalAddSeller(true))}>Додати продавця</button>
            <button className={styles.bttn_blue} onClick={e=>dispatch(setOpenModalAddProduct(true))}>Додати товар</button>
            <button className={styles.bttn_green} onClick={e=>dispatch(setOpenModalCreateZvit(true))}>Звiт</button>
        </div>
    )

}