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
                <h3 className="text-center bg-secondary">Update an Event</h3>
                <hr/>
                <div className="card center">
                    <div className="card-body bg-dark">
                        <div className="row">
                            <div className="col"/>
                            <div className="col-5">
                                <label className="col-form-label">Current</label>
                            </div>
                            <div className="col-5">
                                <label className="col-form-label">Updated</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className="col-form-label">Name</label>
                            </div>
                            <div className="col-5">
                                <input className="form-control mb-2" value={data.ename} readOnly={true}/>
                            </div>
                            <div className="col-5">
                                <input className="form-control mb-2" type="text" ref={this.ename} required placeholder="Enter name to update"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className="col-form-label">Venue</label>
                            </div>
                            <div className="col-5">
                                <input className="form-control mb-2" value={data.evenue} readOnly={true}/>
                            </div>
                            <div className="col-5">
                                <input className="form-control mb-2" type="text" ref={this.evenue} required placeholder="Enter venue to update"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className="col-form-label">Date</label>
                            </div>
                            <div className="col-5">
                                <input className="form-control mb-2" value={data.edate} readOnly={true}/>
                            </div>
                            <div className="col-5">
                                <input className="form-control mb-2" type="date" ref={this.edate} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className="col-form-label">Description</label>
                            </div>
                            <div className="col-5">
                                <textarea className="form-control mb-2" value={data.edescription} readOnly={true}/>
                            </div>
                            <div className="col-5">
                                <textarea className="form-control mb-2" ref={this.edescription} required placeholder="Enter description to update"/>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <button className="btn btn-success col-5" onClick={this.updateEvent}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default connect(mapStateToProps, {updateEvent})(UpdateEvent);