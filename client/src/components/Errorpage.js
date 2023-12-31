import React from 'react'
import { NavLink } from 'react-router-dom'

export const Errorpage = () => {
  return (
    <div>
        <div>
            <h1>404</h1>
        </div>
        <div>
           <h2>

            WE ARE SORRY, PAGE NOT FOUND
           </h2>
           <p>
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGED OR IS TEMPORARY UNAVAILABLE
           </p>
           <NavLink to="/">Back to Homepage</NavLink>
        </div>




    </div>
  )
}
