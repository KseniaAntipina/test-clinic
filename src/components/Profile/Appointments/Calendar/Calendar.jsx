import styles from './Calendar.module.css';
import React  from 'react';
import useCalendar from './CalendarHook';
import './style.css'


const Calendar = () => {
    const {calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth} = useCalendar();

    const dateClickHandler = date => {
        console.log(date);
    }

    return (
        <div className={styles.calendar}>
            <div className={styles.calendarHeader}>
                <button className={styles.buttonPrev} onClick={getPrevMonth}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path
                                d="M4.52934 7.00324L10.6131 0.91946C10.8234 0.709107 10.8234 0.368071 10.6131 0.157718C10.4027 -0.0525726 10.0617 -0.0525726 9.85138 0.157718L3.38672 6.62236C3.17643 6.83272 3.17643 7.17375 3.38672 7.38411L9.85138 13.8488C10.0654 14.0554 10.4064 14.0495 10.6131 13.8355C10.8147 13.6267 10.8147 13.2958 10.6131 13.087L4.52934 7.00324Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="14" height="14" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <p>{`${monthNames[selectedDate.getMonth()]}, ${selectedDate.getFullYear()}`}</p>
                <button className={styles.buttonNext} onClick={getNextMonth}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path
                                d="M9.47066 6.99676L3.38688 13.0805C3.17655 13.2909 3.17655 13.6319 3.38688 13.8423C3.59726 14.0526 3.93827 14.0526 4.14862 13.8423L10.6133 7.37764C10.8236 7.16728 10.8236 6.82625 10.6133 6.61589L4.14862 0.151245C3.93461 -0.0554472 3.59357 -0.0495125 3.38688 0.164502C3.18527 0.373278 3.18527 0.704244 3.38688 0.912988L9.47066 6.99676Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="14" height="14" fill="white" transform="translate(14 14) rotate(-180)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
            <div className={styles.tableWrap}>
                <table className={styles.calendarTable}>
                    <thead>
                    <tr>
                        {daysShort.map(day => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        Object.values(calendarRows).map(cols => {

                            return <tr key={cols[0].date}>
                                {cols.map(col => (
                                    col.date === todayFormatted
                                        ? <td key={col.date} className={`${col.classes} today`}
                                              onClick={() => dateClickHandler(col.date)}>
                                            {col.value}
                                        </td>
                                        : <td key={col.date} className={col.classes}
                                              onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                                ))}
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Calendar;