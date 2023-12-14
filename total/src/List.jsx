import React, { createContext, useContext, useState } from 'react'
import { createproducts } from './Create'
import './list.css'

function List() {
    const products=useContext(createproducts)
    const [count,setCount]=useState(0);
    const quantityincrement=()=>{
        setCount(count+1)
    }
    const quantitydecrement=()=>{
        setCount(count-1)
    }
  return (
    <div className='container col'>
        {products.map((item)=>(
            <div className='card bg-secondary' key={item.id}>
                <h2>{item.id}</h2> 
                <h4>{item.title}</h4>
                <div> <h5>Price:{item.price}</h5>
               description: {item.description}</div>
               <h4> Brand: {item.brand}</h4>
               <div>thumbnail:{item.thumbnail}</div>

               < div className='card-body'>
               <button onClick={quantityincrement} className='btn bg-primary m-3'> increment:{count}</button> 
               <button onClick={quantitydecrement} className='btn bg-danger'>decrement:{count}</button>
               <h4>totalprice={item.price*count}</h4>

               </div>


            </div>
            
        

        
        ))}
        
    </div>
  )
}

export default List