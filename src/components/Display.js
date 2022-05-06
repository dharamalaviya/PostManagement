import React from 'react'
import '../index.css'
import 'antd/dist/antd.min.css'
import { useLocation } from "react-router-dom";

const Display = () => {
    const location = useLocation();
    return (
        <div>
            {/* <div>{console.log("locationData is =>",location.state)}</div>
            <div>{console.log("stateData is =>",location.state.res)}</div> */}

            <div >
                {location.state.res.map((item, i) => {
                    return <div class="card1">
                                <p><b><h6>Name</h6></b>{item.name}</p> 
                                <p><b><h6>Email</h6></b>{item.email}</p>
                                <p><b><h6>Comment</h6></b>{item.body}</p> 

                            </div>
                            
                })}
            </div>
        </div>
    )
}

export default Display;