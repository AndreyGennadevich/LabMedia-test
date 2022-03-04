import styles from './Search.module.css';
import {ReactComponent as GlassIcon} from './glass.svg';

export const Search = ({handleChange, search}) => {
    return (
        <div className={styles.searchWrapper}>
            <label htmlFor='searchInput' className={styles.searchLabel}>
                <GlassIcon/>
            </label>
            <input id='searchInput' value={search} className={styles.search} placeholder="Поиск по имени или e-mail" type="text"
                   onChange={(e) => handleChange(e)}/>
        </div>
    );
};