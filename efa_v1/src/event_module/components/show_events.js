import React, { useState } from 'react';
import { connect } from "react-redux";
import { retrieveEvents } from '../redux/actions/event_actions';
import { mapStateToProps } from '../redux/actions/event_types'

function ShowEvents({data}) {

    const [currentIndex, setCurrentIndex] = useState(0)
   
    const previousPage = (currentIndex) => {
        if(currentIndex>0){
            console.log("previous", currentIndex)
            return setCurrentIndex(currentIndex - 5)
        }
    }
    
    const nextPage = (currentIndex) => {
        if(currentIndex<=data.length/5){
            console.log("next", currentIndex)
            return setCurrentIndex(currentIndex + 5)
        }
    }

    let response
    !data ?
    response = <p><strong>No Data Found</strong></p> :
    response = 
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

    let pagination = 
    (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link" onClick={()=>previousPage(currentIndex)}>Previous</button>
                </li>
                <li className="page-item">
                    <p className="page-link">Page {Math.ceil(currentIndex/5)+1} of {Math.ceil(data.length/5)}</p>
                </li>
                <li className="page-item">
                    <button className="page-link" onClick={()=>nextPage(currentIndex)}>Next</button>
                </li>
            </ul>
        </nav>
    )

    return (
        <div>
            <h3 className="text-center bg-secondary">List of Events</h3>
            <hr/>
            {response}
            <hr/>
            {data}
            <div className="row">
                <div className="col"/>
                <div className="col-5">
                    {pagination}
                </div>
                <div className="col"/>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, {retrieveEvents})(ShowEvents)