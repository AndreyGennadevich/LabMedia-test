import styles from './Layout.module.css';
import cn from 'classnames';
import {Modal, Pagination, Sort} from "../components";
import {UserList} from "../components";
import {Filter} from "../components";
import {useEffect, useState} from "react";
import {useGetUsersQuery} from "../services/UserService";

export const Layout = () => {

    const [usersData, setUsersData] = useState([]);
    const [page, setPage] = useState(0);
    const [sort, setSort] = useState();
    const [search, setSearch] = useState('');
    const [isOpenModal, setIsOpenModal] = useState('closed');
    const [idUser, setIdUser] = useState('');

    const {data, isError, isLoading} = useGetUsersQuery();

    useEffect(() => {
        if (data) {
            setUsersData(data);
        }
    }, [data]);

    useEffect(() => {
        document.body.style.overflow = isOpenModal ? 'hidden' : 'auto';
    }, [isOpenModal]);

    const sortDateFunc = () => {
        let data = usersData.slice();
        if (sort === 'regDate-1') {
            data.sort((a, b) => {
                let dateA = new Date(a.registration_date), dateB = new Date(b.registration_date)
                return dateA - dateB;
            })
            setSort('regDate+1');
        } else {
            data.sort((a, b) => {
                let dateA = new Date(a.registration_date), dateB = new Date(b.registration_date)
                return dateB - dateA
            })
            setSort('regDate-1');
        }
        setUsersData(data);
    };

    const sortRatFunc = () => {
        let data = usersData.slice('');
        if (sort === 'rating+1') {
            data.sort((a, b) => b.rating - a.rating)
            setSort('rating-1');
        } else {
            data.sort((a, b) => a.rating - b.rating)
            setSort('rating+1');
        }
        setUsersData(data);
    };

    const openModalFunc = (id) => {
        setIsOpenModal('opened');
        setIdUser(id);
    };

    const deleteUser = () => {
        let newData = usersData.filter(u => u.id !== idUser)
        setIsOpenModal('closed');
        setUsersData(newData);
    };

    const filterUsers = (search) => {
        if (search.length === 0) {
            setUsersData(data);
        } else {
            const filteredData = usersData.filter(u => u.username.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));
            setUsersData(filteredData)
        }
    };

    const debounce = (func, wait, immediate) => {
        let timeout;

        return function executedFunction() {
            const context = this;
            const args = arguments;

            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };

            const callNow = immediate && !timeout;

            clearTimeout(timeout);

            timeout = setTimeout(later, wait);

            if (callNow) func.apply(context, args);
        };
    };

    const debouncesFilter = debounce(filterUsers, 1000, false);

    const handleChange = (e) => {
        const searchString = e.target.value;
        setSearch(searchString);
        debouncesFilter(searchString);
    }

    const clearFilterList = () => {
        setSort('');
        setSearch('');
        setUsersData(data);
    };

    return (
        <div className={cn(styles.layout)}>
            <h1 className={styles.header}>Список пользователей</h1>
            <Filter handleChange={handleChange} clearFilterList={clearFilterList} search={search} sort={sort}/>
            <Sort sort={sort} sortDate={sortDateFunc} sortRating={sortRatFunc}/>
            <UserList userData={usersData.slice((5 * page), (5 * (page + 1)))} isError={isError} isLoading={isLoading}
                      openModalFunc={openModalFunc}/>
            <Pagination userData={usersData} setPage={setPage} page={page}/>
            <Modal isOpenModal={isOpenModal} deleteUser={deleteUser} setIsOpenModal={setIsOpenModal}/>
        </div>
    );
};