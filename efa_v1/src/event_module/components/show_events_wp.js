import React, { useState } from 'react';
import { connect } from "react-redux";
import { retrieveEvents } from '../redux/actions/event_actions';
import { store } from '../redux/store';
import { mapStateToProps } from '../redux/actions/event_types'

store.dispatch(retrieveEvents())

function ShowEventsWP({data}) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const previousPage = (currentIndex) => {
        if(currentIndex>0){
            return setCurrentIndex(currentIndex - 5)
        }
    }
    
    const nextPage = (currentIndex) => {
        if(currentIndex<=data.length/5){
            return setCurrentIndex(currentIndex + 5)
        }
    }

    let response
    !data ?
    response = <p><strong>No Data Found</strong></p> :
    response = 
    // /*
    (
        <div>
            {
                data.slice(currentIndex,currentIndex+5).map((x) => 
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

    /*
    let pagination
    pagination = 
    (
    <div>
    {
    for(let i=1; i<Math.ceil(data.length/5)+1; i++){
        return (<li className="page-item"><button className="page-link">{i}</button></li>)
    }
    }
    </div>
    )
    */

    return (
        <div>
            <h3>List of Events</h3>
            {response}
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link" onClick={()=>previousPage(currentIndex)}>Previous</button>
                    </li>
                    {/* {pagination} */}
                    <li className="page-item">
                        <button className="page-link" onClick={()=>nextPage(currentIndex)}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default connect(mapStateToProps, {retrieveEvents})(ShowEventsWP)