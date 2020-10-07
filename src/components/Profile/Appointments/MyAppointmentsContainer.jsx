import React from 'react';
import MyAppointments from "./MyAppointments";

class MyAppointmentsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/items")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        items: result
                    });
                },
            )
    }

    render() {
        const {items} = this.state;
        return (
            <MyAppointments items={items}  name={'MyAppointments'}/>
        );
    }
}

export default MyAppointmentsContainer;