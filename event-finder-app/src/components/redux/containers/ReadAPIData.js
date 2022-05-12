import React from "react";
import { connect } from "react-redux";

function ReadAPIData({data}){

    let response
    !data ?
    response = <p><strong>No Data Found</strong></p> :
    response = 
    (<div>{JSON.stringify(data)}</div>)
    /*
    (
        <div>
            {
                data.map((x) => 
                    <div key={x.id}>
                        <p>ID: {x.id}</p>
                        <p>Name: {x.name}</p>
                        <p>Website: {x.website}</p>
                    </div>
                )
            }
        </div>
    )
    */

    return (
        <div>
            <h2>List of Events</h2>
            {response}
            <hr/>
        </div>
    )
}

const mapStateProps = state => {
    return {
        data : state.data
    }
};

export default connect(
    mapStateProps,
    null
)(ReadAPIData)