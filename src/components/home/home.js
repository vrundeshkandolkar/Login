import React, { Component } from 'react';
import Calendar from 'react-calendar';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    onChange = date => this.setState({ date })

    handleBook = () => alert(`Appointment is booked on ${this.state.date.getDate()} ${months[this.state.date.getMonth()]} ${this.state.date.getFullYear()}`);

    render() {
        return (
            <div className="home">
                <h2>Book your Appointment</h2>


                <Calendar
                    className='margin-auto'
                    onChange={this.onChange}
                    value={this.state.date}
                />

                <button className="bubbly-button" onClick={this.handleBook}>Book</button>
            </div>
        );
    }
}

export default Home;
