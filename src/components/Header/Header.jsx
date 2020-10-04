import React from 'react';
import styles from "./Header.module.css";
import search from '../../assets/images/search.svg';
import bell from '../../assets/images/bell.svg';
import eye from '../../assets/images/search.svg';
import profilePhoto from '../../assets/images/profilePhoto.png';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.profileTitle}>Мой профиль</div>
            <div className={styles.headerInfo}>
                <div className={styles.item}>
                    <img src={search}/>
                </div>
                <div className={styles.item}>
                    <img src={bell}/>
                </div>
                <div className={styles.item}>
                    <img src={eye}/>
                </div>
                <div className={`${styles.item} ${styles.profilePhoto}`}>
                    <img src={profilePhoto} className={styles.profilePhotoImg}/>
                </div>
            </div>
        </div>
    )
}

export default Header;