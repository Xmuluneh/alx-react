import React from "react";
import './Notifications.css'
import {getLatestNotification} from './utils'
import close from './close-icon.png'



function Notifications () {
    function onClick(){
        console.log('Close button has been clicked')
    }
    return (
    <div className='Notifications'>
       <button aria-label="Close"
               style={{position:'fixed',top: '1rem',right: '1rem'}}
               onClick={onClick}
       >
          <img src={close} alt='Close'/>
       </button>
        <p>Here is the list of notifications</p>
        <ul>
            <li data='default'>New course available</li>
            <li data='urgent'>New resume available</li>
            <li data='urgent' dangerouslySetInnerHTML={{__html:getLatestNotification()}}></li>
        </ul>
        </div>

    )

}


export default Notifications