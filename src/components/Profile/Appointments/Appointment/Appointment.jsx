import React from 'react';
import styles from './Appointment.module.css'
import malushko from './../../../../assets/images/malushko.png'

const Appointment = (props) => {


    return (
        <div className={styles.appointments}>
            {props.items.map(item => (
                <div className={styles.appointment}>
                    <div className={styles.date}>
                        <span className={styles.dateDay}>{item.date["day of week"]} </span>
                        <span className={styles.dateNumber}>{item.date.number} | </span>
                        <span className={styles.dateTime}>{item.date.time}</span>
                    </div>
                    <div className={styles.clinic}>
                        <p className={styles.clinicName}>{item.clinic.name},</p>
                        <p className={styles.clinicAddress}>{item.clinic.address}</p>
                    </div>
                    <div className={styles.doctor}>
                        <img src={item.photo} className={styles.doctorPhoto}/>
                        <div className={styles.doctorInfo}>
                            <p className={styles.doctorInfoName}>{item.nameDoctor}</p>
                            <p className={styles.doctorInfoDepartment}>{item.branch}</p>
                        </div>
                        <a href="javascript:void(0)" className={`${styles.btnDefault} ${styles.btnСancel}`}>Отменить</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Appointment;