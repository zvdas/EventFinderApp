import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AddEvent from './add_event'
import Credits from './credits'
import SearchEvent from './search_event'
import ShowEvents from './show_events'
import ShowEventsWP from './show_events_wp'
import UpdateEvent from './update_event'

export default function Navbar() {
    return (
        <BrowserRouter>
            <nav>
                <div className="nav nav-tabs" role="tablist">
                    <button className="nav-link"  data-bs-toggle="tab">
                        <Link to={'/show'}>Show Events</Link>
                    </button>
                    <button className="nav-link"  data-bs-toggle="tab">
                        <Link to={'/search'}>Search Event</Link>
                    </button>
                    <button className="nav-link"  data-bs-toggle="tab">
                        <Link to={'/add'}>Create Event</Link>
                    </button>
                    <button className="nav-link"  data-bs-toggle="tab">
                        <Link to={'/credits'}>Credits</Link>
                    </button>
                </div>
            </nav>
            <Routes>
                {/* <Route exact path="/show" element={<ShowEvents/>}/> */}
                <Route exact path="/show" element={<ShowEventsWP/>}/>
                <Route exact path="/search" element={<SearchEvent/>}/>
                <Route exact path="/add" element={<AddEvent/>}/>
                <Route exact path="/credits" element={<Credits/>}/>
                <Route path="/update/:id" element={<UpdateEvent/>}/>
            </Routes>
        </BrowserRouter>
    )
}