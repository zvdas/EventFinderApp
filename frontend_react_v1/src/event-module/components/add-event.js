import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createEvent } from '../redux/actions/event/event-actions'

class AddEvent extends Component {
    constructor(props) {
        super(props)
        
        this.ename = React.createRef();
        this.evenue = React.createRef();
        this.edate = React.createRef();
        this.edescription = React.createRef();

        this.state = { msg: '' }

        this.saveEvent = this.saveEvent.bind(this);
    }

    saveEvent() {
        let events = {
            ename : this.ename.current.value,
            evenue : this.evenue.current.value,
            edate : this.edate.current.value,
            edescription : this.edescription.current.value
        }
        
        this.props.createEvent(events)
        this.setState({msg:'Event Created Successfully'})
    }

    render() {
        return (
            <div>
                <h3 className='text-center bg-secondary'>Create an Event</h3>
                <hr/>
                <div className='card center'>
                    <div className='card-body bg-dark'>
                        <div className='row'>
                            <div className='col'>
                                <label className='col-form-label'>Name</label>
                            </div>
                            <div className='col-9'>
                                <input type='text' className='form-control mb-2' ref={this.ename}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='col-form-label'>Venue</label>
                            </div>
                            <div className='col-9'>
                                <input type='text' className='form-control mb-2' ref={this.evenue}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='col-form-label'>Date</label>
                            </div>
                            <div className='col-9'>
                                <input type='date' className='form-control mb-2' ref={this.edate}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='col-form-label'>Description</label>
                            </div>
                            <div className='col-9'>
                                <textarea className='form-control mb-2' ref={this.edescription}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'/>
                            <button className='btn btn-success col-5' onClick={this.saveEvent}>Submit</button>
                            <div className='col'/>
                        </div>
                        <div className='row'>
                            <p className='text-center'>{this.state.msg}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {createEvent})(AddEvent);