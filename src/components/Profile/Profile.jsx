import React from 'react';
import ElectronicCard from "./ProfileMain/ElectronicCard/ElectronicCard";
import MyAppointmentsContainer from "./Appointments/MyAppointmentsContainer";
import MyAppointments from "./Appointments/MyAppointments";
import ProfileMain from "./ProfileMain/ProfileMain";
import {BrowserRouter, Route, Switch} from "react-router-dom";


const Profile = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/profile" component={ProfileMain} />
                <Route exact path="/profile/myappointments" component={MyAppointmentsContainer} />
            </Switch>
        </div>
    )
}

export default Profile;