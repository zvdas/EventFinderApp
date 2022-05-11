import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createEvent } from '../redux/actions/event_actions'

class AddEvent extends Component {
    constructor(props) {
        super(props)
        
        this.ename = React.createRef();
        this.evenue = React.createRef();
        this.edate = React.createRef();
        this.edescription = React.createRef();

        this.state = {}

        this.saveEvent = this.saveEvent.bind(this);
    }

    saveEvent(){
        let events = {
            ename : this.ename.current.value,
            evenue : this.evenue.current.value,
            edate : this.edate.current.value,
            edescription : this.edescription.current.value
        }
        
        this.props.createEvent(events)
    }

    render() {
        return (
            <div>
                <h1>Create an Event</h1>
                Name: <input type="text" ref={this.ename}/><br/>
                Venue: <input type="text" ref={this.evenue}/><br/>
                Date: <input type="date" ref={this.edate}/><br/>
                Description: <textarea ref={this.edescription}/><br/>
                <button onClick={this.saveEvent}>Submit</button>
            </div>
        )
    }
}

export default connect(null, {createEvent})(AddEvent);