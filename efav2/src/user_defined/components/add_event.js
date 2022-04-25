/*
import React from 'react'

export default function AddEvent() {
    return (
        <div>
            Add Event
        </div>
    )
}
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createEvent } from '../redux/actions/event_actions'

class AddEvent extends Component {
    constructor(props) {
        super(props)
        
        // this.id = React.createRef();
        this.ename = React.createRef();
        this.evenue = React.createRef();
        this.edate = React.createRef();
        this.edescription = React.createRef();

        this.state = {
           events : [],
           submitted : false,
           published : false
        }

        this.saveEvent = this.saveEvent.bind(this);
    }

    saveEvent(){
        let events = {
            // id : this.id.current.value,
            ename : this.ename.current.value,
            evenue : this.evenue.current.value,
            edate : this.edate.current.value,
            edescription : this.edescription.current.value
        }
        console.log(events)
        this.props.createEvent(events)
            .then(response => console.log(response))
            // .then(response => response.json())
            // .then(this.setState({events : response}))
            .catch(error => {throw(error)})
    }

    render() {
        return (
            <div>
                {/* ID: <input type="number" ref={this.id}/><br/> */}
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