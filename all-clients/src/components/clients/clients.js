import React, { Component } from 'react';
import './clients.css';

class Clients extends Component {
    constructor() {
        super();
        this.state = {
            clients: []
        }
    }

    componentDidMount() {
        fetch('/api/clients')
        .then(res => res.json())
        .then(clients => this.setState({clients}, () => {
            console.log(`Clients were fetched.. `, clients);    
        }));
    }

    render() {
        return (
            <div>
                <h2>Our Clients: </h2>
            </div>
        );
    }
}

export default Clients;