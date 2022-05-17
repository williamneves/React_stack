import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const [ product, setProduct ] = useState( {} )
  const [ loaded, setLoading ] = useState( false )
  const { id } = useParams()

  useEffect( () => {
    axios.get( `http://localhost:8000/api/product/${id}` )
      .then( res => {
        setProduct( res.data )
        setLoading( true )
      } )
      .catch( err => {
        console.log( err )
      } )
  }, [ id ] )
  

  return loaded === true ? (
    <div>
      <h1>{ product.Title }</h1>
      <p>{ product.Price }</p>
      <p>{ product.Description }</p>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default Product