import styles from './Sort.module.css';
import cn from "classnames";

export const Sort = ({sort, sortDate, sortRating}) => {
    return (
        <>
            <div className={styles.sortWrapper}>
                Сортировка:
                <button className={cn(styles.btn, {
                    [styles.active]: sort === 'regDate+1' || sort === 'regDate-1'
                })}
                        onClick={() => sortDate()}
                >
                    Дата регистрации
                </button>
                <button className={cn(styles.btn, {
                    [styles.active]: sort === 'rating+1' || sort === 'rating-1'
                })}
                        onClick={() => sortRating()}
                >
                    Рейтинг
                </button>
            </div>
        </>
    );
};