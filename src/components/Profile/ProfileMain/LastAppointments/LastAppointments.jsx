import React from 'react';
import styles from './LastAppointments.module.css'
import Appointment from "../../Appointments/Appointment/Appointment";
import {NavLink} from "react-router-dom";

const LastAppointments = (props) => {


    return (
        <div className={styles.lastAppointments}>
            <p className={styles.appointmentsTitle}>Записи на прием</p>
            <div className={styles.appointmentsRow}>

                <Appointment items={props.items} name={'LastAppointments'}/>

                <div className={styles.appointmentsAll}>
                    <p>Еще 3 записи</p>
                    <NavLink to={'/profile/myappointments'} className={styles.appointmentsAllBtn}>Подробнее</NavLink>
                </div>
            </div>
        </div>
    )
}


export default LastAppointments;