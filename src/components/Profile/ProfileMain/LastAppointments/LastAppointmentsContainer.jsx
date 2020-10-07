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
        fetch("http://localhost:3000/items?_page=1&_limit=2")
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
                <LastAppointments items={items} />
        );
    }
}

export default LastAppointmentsContainer;



