import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AddEvent from './add_event'
import SearchEvent from './search_event'
import ShowEvents from './show_events'

export default function Navbar() {
    return (
        <BrowserRouter>
            <div><Link to={'/show'}>Show Events</Link></div>
            <div><Link to={'/search'}>Search Event</Link></div> 
            <div><Link to={'/add'}>Create Event</Link></div>
            <hr/>
            <Routes>
                <Route exact path="/show" element={<ShowEvents/>}/>
                <Route exact path="/search" element={<SearchEvent/>}/>
                <Route exact path="/add" element={<AddEvent/>}/>
            </Routes>
        </BrowserRouter>
    )
}