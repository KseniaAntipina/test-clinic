import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/profile" render={
                        () => <ProfileContainer/>}/>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;