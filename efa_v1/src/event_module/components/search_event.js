import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { findEventByID, findEventByDate, findEventByVenue, selectDataTypes, deleteEvent } from '../redux/actions/event_actions'
import { mapStateToProps } from '../redux/actions/event_types'
import { store } from '../redux/store'

class SearchEvent extends Component {
    constructor(props) {
      super(props)
        
      this.eoptions = React.createRef();
      this.datatype = React.createRef();

      this.state = {}
    
      this.handleDropdownOptions = this.handleDropdownOptions.bind(this);
      this.startSearch = this.startSearch.bind(this);
      this.showResults = this.showResults.bind(this);
      this.getIdData = this.getIdData.bind(this);
      this.deleteData = this.deleteData.bind(this);
    }

    handleDropdownOptions(event){
        this.props.selectDataTypes(event.target.value)
    }

    startSearch(){
        switch(store.getState().payload){
            case "id":
                this.props.findEventByID(this.eoptions.current.value)
                break
            case "date":
                this.props.findEventByDate(this.eoptions.current.value)
                break
            case "venue":
                this.props.findEventByVenue(this.eoptions.current.value)
                break
            default:
                alert("search field not found")    
        }
    }

    getIdData(e){
        this.props.findEventByID(e)
    }

    deleteData(e){
        console.log(`in search event : delete data id : ${e}`)
        this.props.deleteEvent(e)
    }

    showResults(){
        let data = store.getState().payload
        let response
        if(!data){
            response = <p><strong>No Data Found</strong></p>
        }else if(Array.isArray(data)===false){
            response = 
            (
                <div className="card center">
                    <div className="card-body bg-dark">
                        <h5 className="card-title">{data.ename}</h5>
                        <p className="card-text">
                            Venue: {data.evenue} | Date: {data.edate}
                            <br/>
                            {data.edescription}
                        </p>
                        <button className="btn btn-success mx-1" onClick={()=>this.getIdData(data.id)}><Link className="text-decoration-none text-white" to={`/update/${data.id}`}>Update</Link></button>
                        <button className="btn btn-danger mx-1" onClick={()=>this.deleteData(data.id)}>Delete</button>
                    </div>
                </div>
            )
        }else if(Array.isArray(data)===true){
            response = 
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
                                    <button className="btn btn-success mx-1" onClick={()=>this.getIdData(x.id)}><Link className="text-decoration-none text-white" to={`/update/${x.id}`}>Update</Link></button>
                                    <button className="btn btn-danger mx-1" onClick={()=>this.deleteData(x.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            )
        }
        this.setState({response : response})
    }

    render(){
        let type
        if (Array.isArray(store.getState().payload)===false)
            type = store.getState().payload

        return (
            <div>
                <h3 className="text-center bg-secondary">Search Events</h3>
                
                <div className="container bg-dark py-2">
                    <div className="row">
                        <div className="col">
                            <select className="h-100 d-inline-block mx-1 btn btn-primary" onChange={this.handleDropdownOptions} value={this.datatype} ref={this.datatype}>  
                                <option value="">---select---</option>
                                <option value="id">Search By ID</option>
                                <option value="date">Search By Date</option>
                                <option value="venue">Search By Venue</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <input className="h-100 d-inline-block mx-1 form-control" type={type} placeholder={`Enter ${type} to search`} ref={this.eoptions} style={{height:"40px"}}/>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-primary h-100 d-inline-block mx-1" onClick={this.startSearch}>Search</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-info h-100 d-inline-block mx-1" onClick={this.showResults}>Show Results</button>
                        </div>
                    </div>        
                </div>

                <hr/>
                {this.state.response}
            </div>
        )
    }
}

export default connect(mapStateToProps, { findEventByID, findEventByDate, findEventByVenue, selectDataTypes, deleteEvent })(SearchEvent)