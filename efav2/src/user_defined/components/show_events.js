import React from 'react';
import { connect } from "react-redux";
import { retrieveEvents } from '../redux/actions/event_actions';

function ShowEvents({data}) {
    let response
    !data ?
    response = <p><strong>No Data Found</strong></p> :
    response = 
    (
        <div>
            {
                data.map((x) => 
                    <div key={x.id}>
                        <p>ID: {x.id}</p>
                        <p>Name: {x.ename}</p>
                        <p>Venue: {x.evenue}</p>
                        <p>Date: {x.edate}</p>
                        <p>Description: {x.edescription}</p>
                    </div>
                )
            }
        </div>
    )

    return (
        <div>
            <h1>List of Events</h1>
            {response}
            <hr/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        data : state.payload
    }
}

export default connect(mapStateToProps, {retrieveEvents})(ShowEvents)