import React from 'react'

export default function Credits() {
  
    return (
        <div>
            <h3 className="text-center bg-secondary">Credits</h3>
            <hr/>
            <div className="card bg-dark">
                <div className="row">
                    <div className="col"/>
                    <div className="col-6 text-center">
                        <div className="card-title">Red Theatre Curtain Photo</div>
                        <div className="card-text">
                            <img src="https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" style={{height: "100px", width: "100px"}} alt="Photo by Rob Laughter on Unsplash"/>
                            <p>Photo by Rob Laughter on Unsplash</p>
                            <a href="https://unsplash.com/photos/WW1jsInXgwM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Click Here to Visit</a>
                        </div>
                        <hr/>
                        <div className="card-title">Group of People Watching Concert Photo</div>
                        <div className="card-text">
                            <img src="https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" style={{height: "100px", width: "100px"}} alt="Photo by Rob Laughter on Unsplash"/>
                            <p>Photo by Rachel Coyne on Unsplash</p>
                            <a href="https://unsplash.com/photos/U7HLzMO4SIY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Click Here to Visit</a>
                        </div>
                    </div>
                    <div className="col"/>
                </div>
            </div>
        </div>
    ) 
}