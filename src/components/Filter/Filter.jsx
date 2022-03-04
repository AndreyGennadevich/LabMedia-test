import styles from './Filter.module.css';
import {Search} from "../Search/Search";
import {ReactComponent as CleanIcon} from './clean.svg';

export const Filter = ({handleChange, clearFilterList, search, sort}) => {
    return (
        <div className={styles.filterWrapper}>
            <Search handleChange={handleChange} search={search}/>
            {(search || sort) && <button className={styles.filterButton} onClick={() => clearFilterList()}>
                <CleanIcon/>Очистить фильтр
            </button>}
        </div>
    );
};