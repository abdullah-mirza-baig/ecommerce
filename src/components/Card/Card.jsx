import React from 'react'
import './Card.css'
// import { DishData } from '../../utils/constant/CardData'

const Card = ({data,togglemodal}) => {
    const {id,name,price,image} = data;
    
  return (
   
    <>

        <div className="card w-[300px] h-[400px] rounded-3xl " style={{ backgroundImage: `url(${image})` }}>

            <h1>{name}</h1>
            <p>{price}/=</p>
            {/* <button>View Details</button> */}
            {/* <button onClick={()=> togglemodal(true)} >Open</button> */}
        </div>

    </>
  )
}

export default Card