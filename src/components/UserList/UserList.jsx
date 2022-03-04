import styles from './UserList.module.css';
import {ReactComponent as CloseIcon} from "./close.svg";
import {ErrorComponent} from "../ErrorComponent/ErrorComponent";

export const UserList = ({userData, isError, isLoading, openModalFunc}) => {

    return (
        <>
            <table className={styles.table}>
                <thead className={styles.thead}>
                <tr>
                    <th>
                        Имя пользователя
                    </th>
                    <th>
                        E-mail
                    </th>
                    <th>
                        Дата регистрации
                    </th>
                    <th>
                        Рейтинг
                    </th>
                </tr>
                </thead>
                <tbody className={styles.tbody}>
                {isError && <tr>
                    <th colSpan='5'><ErrorComponent/></th>
                </tr>}
                {!isLoading && userData.map(u => (
                    <tr key={u.id}>
                        <th className={styles.thName}>{u.username}</th>
                        <th>{u.email}</th>
                        <th>{u.registration_date.slice(8, 10) + ' ' + u.registration_date.slice(5, 7) + ' ' + u.registration_date.slice(2, 4)}</th>
                        <th>{u.rating}</th>
                        <th className={styles.thClose}>
                            <button onClick={() => openModalFunc(u.id)}>
                                <CloseIcon/>
                            </button>
                        </th>
                    </tr>
                ))}
                </tbody>
            </table>
        </>

    );
};

