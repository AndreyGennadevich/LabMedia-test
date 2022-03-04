import styles from './Pagination.module.css';
import cn from "classnames";

export const Pagination = ({userData, setPage, page}) => {

    const calcButton = (arr) => {
        let length = arr;
        let val = 0;
        let arrVal = [];
        while (length > 5) {
            length -= 5;
            arrVal.push(val++);
        }
        if (length === 5 || length < 5) {
            arrVal.push(val++)
            return arrVal;
        } else {
            return arrVal;
        }
    };

    return (
        <div>
            {userData.length !== 0 && calcButton(userData.length).map(item => (
                <button className={cn(styles.pagination, {
                    [styles.active]: page === item
                })} key={item} onClick={() => setPage(item)}>{item + 1}</button>
            ))}
        </div>
    );
};