import React from 'react';
import LastAppointments from './LastAppointments'


class LastAppointmentsContainer extends React.Component {

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
                    console.log(result)
                    this.setState({
                        items: result
                    });
                },
            )
    }

    render() {

        const {items} = this.state;
        console.log(items)
        return (

            <LastAppointments items={items}/>

        );
    }
}

export default LastAppointmentsContainer;



