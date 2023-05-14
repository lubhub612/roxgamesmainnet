import moment from 'moment'
import React from 'react'

const utctime = () => {
  return (
    <div>
        {
            moment().format()
        }   
    </div>
  )
}

export default utctime
