
import React from 'react'
import DropSpot from './DropSpot'
import CheckIt from './CheckIt'



const AddSpot = () => {
  return (
    <section> 
      <h1 className='text-header-2 text-primary mb-10' >Add Spot</h1> 
      
      <DropSpot/>
      <form method=''>  
      <hr/>
      <CheckIt/>
      </form>
    </section>
  )
}

export default AddSpot