import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const OneProduct = props => {
    const {id}=useParams()
    const [product,setProduct]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res=>{
                console.log(res.data);
                setProduct(res.data)
            })
            .catch(err=>console.log(err))
    },[])
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}$</p>
            <p>Description: {product.description}</p>
        </div>
    )
}


export default OneProduct