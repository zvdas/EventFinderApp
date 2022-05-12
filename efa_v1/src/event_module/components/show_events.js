import React from 'react';
import { connect } from "react-redux";
import { retrieveEvents } from '../redux/actions/event_actions';
import { store } from '../redux/store';
import { mapStateToProps } from '../redux/actions/event_types'

store.dispatch(retrieveEvents())

function ShowEvents({data}) {
    let response
    !data ?
    response = <p><strong>No Data Found</strong></p> :
    response = 
    // /*
    (
        <div>
            {
                data.map((x) => 
                    <div className="card center" key={x.id}>
                        <div className="card-body bg-dark">
                            <h5 className="card-title">{x.ename}</h5>
                            <p className="card-text">
                                Venue: {x.evenue} | Date: {x.edate}
                                <br/>
                                {x.edescription}
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
    // */

    return (
        <div>
            <h3>List of Events</h3>
            {response}
        </div>
    )
}

export default connect(mapStateToProps, {retrieveEvents})(ShowEvents)