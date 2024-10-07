import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Product = () => {
  const[data,setdata]=useState([])

  const getdata=()=>{
    axios.get('http://localhost:8080/product').then(response=>{
      console.log(response.data.msg)
      setdata(response.data.msg)
    }).catch(err=>{
      console.log(err)
    })
  }
useEffect(()=>{
 getdata()
},[])

  return (
<>
    <div>
  {data.map(element=>
  <div key={element.name}>
  <p>Name:{element.name}</p>
    <h1>{element.price}</h1>
    </div>
  )}


    </div>
    </>
  )
}

export default Product
