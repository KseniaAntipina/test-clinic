import React from 'react';
import ElectronicCard from "./ElectronicCard/ElectronicCard";
import LastAppointmentsContainer from "./Appointments/LastAppointments/LastAppointmentsContainer";



const Profile = (props) => {

    return (
        <div>
            <LastAppointmentsContainer/>
            <ElectronicCard/>

        </div>
    )
}

export default Profile;