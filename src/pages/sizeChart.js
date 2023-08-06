import React from 'react'
import sc from '../img/sizechart.jpeg'

function SizeChart() {
  return (
    <div className='container d-flex justify-content-center align-items-center flex-column'>
      <h1 className="text-center">Size Chart</h1>
      <img alt='sizechart' src={sc} className="img-fluid mt-3" />
    </div>
  )
}

export default SizeChart;