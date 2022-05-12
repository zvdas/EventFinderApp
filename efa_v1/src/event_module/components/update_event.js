import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateEvent } from '../redux/actions/event_actions'
import { mapStateToProps } from '../redux/actions/event_types'
import { store } from '../redux/store'

class UpdateEvent extends Component {
    constructor(props) {
        super(props)
        
        this.ename = React.createRef();
        this.evenue = React.createRef();
        this.edate = React.createRef();
        this.edescription = React.createRef();

        this.state = {}

        this.updateEvent = this.updateEvent.bind(this)
    }

    updateEvent(){
        let id = store.getState().payload.id

        let event = {
            ename : this.ename.current.value,
            evenue : this.evenue.current.value,
            edate : this.edate.current.value,
            edescription : this.edescription.current.value
        }

        this.props.updateEvent(id, event)
    }

    render() {
        let data = store.getState().payload
        return (
            <div>
                <h3>Update an Event</h3>
                Name: <input value={data.ename} readOnly={true}/>
                <input type="text" ref={this.ename}/>
                <br/>
                Venue: <input value={data.evenue} readOnly={true}/>
                <input type="text" ref={this.evenue}/>
                <br/>
                Date: <input value={data.edate} readOnly={true}/>
                <input type="date" ref={this.edate}/>
                <br/>
                Description: <textarea value={data.edescription} readOnly={true}/>
                <textarea ref={this.edescription}/>
                <br/>
                <button onClick={this.updateEvent}>Submit</button>
            </div>
        )

    }
}

export default connect(mapStateToProps, {updateEvent})(UpdateEvent);