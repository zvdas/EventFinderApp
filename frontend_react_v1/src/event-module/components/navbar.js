import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './home'
import AddEvent from './add-event'
import Credits from './credits'
import SearchEvent from './search-event'
import ShowEvents from './show-events'
import UpdateEvent from './update-event'
import Error from './error'
import AuthServices from '../services/firebase-auth'

export default function Navbar() {
    return (
        <BrowserRouter>
            <nav className='row d-flex justify-content-center'>
                <div className='col-12'>
                    <div className='nav nav-tabs bg-dark' role='tablist'>
                        <button className='nav-link' data-bs-toggle='tab'>
                            <Link to={'/'}>Home</Link>
                        </button>
                        <button className='nav-link' data-bs-toggle='tab'>
                            <Link to={'/show'}>Show Events</Link>
                        </button>
                        <button className='nav-link' data-bs-toggle='tab'>
                            <Link to={'/search'}>Search Event</Link>
                        </button>
                        <button className='nav-link' data-bs-toggle='tab'>
                            <Link to={'/add'}>Create Event</Link>
                        </button>
                        <button className='nav-link' data-bs-toggle='tab'>
                            <Link to={'/credits'}>Credits</Link>
                        </button>
                        <button className='nav-link' data-bs-toggle='tab' onClick={() => AuthServices.logout()}>
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
            
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/show' element={<ShowEvents/>}/>
                <Route exact path='/search' element={<SearchEvent/>}/>
                <Route exact path='/add' element={<AddEvent/>}/>
                <Route exact path='/credits' element={<Credits/>}/>
                <Route path='/update/:id' element={<UpdateEvent/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}