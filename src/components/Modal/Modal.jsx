import styles from './Modal.module.css';
import cn from "classnames";

export const Modal = ({isOpenModal, deleteUser, setIsOpenModal}) => {
    return (
        <div className={cn(styles.modalWrapper, {
            [styles.active]: isOpenModal === 'opened',
            [styles.close]: isOpenModal === 'closed'
        })}>
            <div className={styles.modal}>
                <span>
                    Вы уверены, что хотите удалить пользователя?
                </span>
                <div className={styles.buttonWrapper}>
                    <button className={styles.button} onClick={() => deleteUser()}>Да</button>
                    <button className={styles.button} onClick={() => setIsOpenModal('closed')}>Нет</button>
                </div>
            </div>
        </div>
    );
};