import React from 'react'
import ElectronicCard from "./ElectronicCard/ElectronicCard";
import LastAppointmentsContainer from "./LastAppointments/LastAppointmentsContainer";

const ProfileMain = (props) => {

    return (
        <div>
                <LastAppointmentsContainer/>
                <ElectronicCard/>
        </div>
    )
}

export default ProfileMain;
