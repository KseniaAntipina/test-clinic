import React from 'react';
import styles from './LastAppointments.module.css'
import Appointment from "../Appointment/Appointment";
import malushko from "../../../../assets/images/malushko.png";

const LastAppointments = (props) => {

    return (
        <div className={styles.appointments}>
            <p className={styles.appointmentsTitle} >Записи на прием</p>
            <Appointment items={props.items}/>
        </div>

    )
}

export default LastAppointments;