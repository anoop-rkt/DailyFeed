import React from 'react'
import loading from './images/loading.gif'
const Spinner = () => {
  return (
    <div className='text-center' style={{ marginTop: "1rem" }}>
      <img className='my-3' src={loading} alt="Loading..." style={{ width: '115px', height: "115px" }} />
    </div>
  )
}

export default Spinner
