import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findEventByID, findEventByDate, findEventByVenue } from '../redux/actions/event_actions'

class SearchEvent extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }

    startSearch(){

    }
    
    render(){
        return (
            <div>
                <h1>Search Events</h1>
                <select>  
                    <option value="">Search By ID</option>
                    <option>Search By Date</option>
                    <option>Search By Venue</option>
                </select>
                <input type="text" placeholder="Enter Search Parameters"/>
                <button onClick={this.startSearch}>Search</button>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    // data : state.payload
}

export default connect(mapStateToProps, { findEventByID, findEventByDate, findEventByVenue })(SearchEvent)