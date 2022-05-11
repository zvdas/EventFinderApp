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

      this.state = {
          response:''
      }
    
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
                <div>
                    <p>ID: {data.id}</p>
                    <p>Name: {data.ename}</p>
                    <p>Venue: {data.evenue}</p>
                    <p>Date: {data.edate}</p>
                    <p>Description: {data.edescription}</p>
                    <button onClick={()=>this.getIdData(data.id)}><Link to={`/update/${data.id}`}>Update</Link></button>
                    <button onClick={()=>this.deleteData(data.id)}>Delete</button>
                    <hr/>
                </div>
            )
        }else if(Array.isArray(data)===true){
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
                                <button onClick={()=>this.getIdData(x.id)}><Link to={`/update/${x.id}`}>Update</Link></button>
                                <button onClick={()=>this.deleteData(x.id)}>Delete</button>
                                <hr/>
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
                <h1>Search Events</h1>
                
                <select onChange={this.handleDropdownOptions} value={this.datatype} ref={this.datatype}>  
                    <option value="">---select---</option>
                    <option value="id">Search By ID</option>
                    <option value="date">Search By Date</option>
                    <option value="venue">Search By Venue</option>
                </select>

                <input type={type} placeholder={`Enter ${type} to search`} ref={this.eoptions}/>
                
                <button onClick={this.startSearch}>Search</button>
                <button onClick={this.showResults}>Show Results</button>

                <hr/>
                
                {this.state.response}
            </div>
        )
    }
}

export default connect(mapStateToProps, { findEventByID, findEventByDate, findEventByVenue, selectDataTypes, deleteEvent })(SearchEvent)