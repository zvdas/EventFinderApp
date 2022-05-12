import React, { Component } from 'react'
import { connect } from 'react-redux';
import { postToAPI } from '../actions/api_services';

class SendDataToAPI extends Component {
    constructor(props) {
        super(props)

        this.eid = React.createRef();
        this.ename = React.createRef();
        this.elocation = React.createRef();
        this.edate = React.createRef();

        this.state = {
            eid : null,
            ename : "",
            elocation : "",
            edate : ""
        }

        this.submitEvent = this.submitEvent.bind(this);
    }

    /*
    event = {
        eid : this.eid.current.value,
        ename : this.ename.current.value,
        elocation : this.elocation.current.value,
        edate : this.edate.current.value
    };
    */

    submitEvent(){
        // this.setState(this.event)
        // /*
        this.setState({
            eid : this.eid.current.value,
            ename : this.ename.current.value,
            elocation : this.elocation.current.value,
            edate : this.edate.current.value
        });
        // */
        // alert(`${eid}, ${ename}, ${elocation}, ${edate}`)
        // alert(`${this.refs.eid.value}, ${this.refs.ename.value}, ${this.refs.elocation.value}, ${this.refs.edate.value}`)
        // alert(`${this.eid.current.value},${this.ename.current.value},${this.elocation.current.value},${this.edate.current.value}`)
        // postToAPI(this.eid, this.ename, this.elocation, this.edate)
        const {eid, ename, elocation, edate} = this.state;
        postToAPI(eid, ename, elocation, edate)
            // .then((data) => {
            //     this.setState({
            //         eid : data.eid,
            //         ename : data.ename,
            //         elocation : data.elocation,
            //         edate : data.edate
            //     })
            // })
            // .catch(error => {
            //     throw(error)
            // })
    }

    render() {
        return (
            <div>
                ID: <input type="number" ref={this.eid}/><br/>
                Name: <input type="text" ref={this.ename}/><br/>
                Location: <input type="text" ref={this.elocation}/><br/>
                Date: <input type="date" ref={this.edate}/><br/>
                <button onClick={this.submitEvent}>Add</button>
                {/* <button onClick={this.showState}>State</button> */}
            </div>
        )   
    }
}

const mapStateProps = state => {
    return{
        data : state.data
    }
}

export default connect(
    mapStateProps,
    null
)(SendDataToAPI)