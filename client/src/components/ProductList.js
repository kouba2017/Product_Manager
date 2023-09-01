import React, { useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ProductList = (props) => {
    const {removeFromDom,products,setProducts}=props
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data)
                console.log(res.data);
            })
            .catch(err=>console.log('ERROR: ',err))
    },[])
    const deleteProduct=(id)=>{
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res=>removeFromDom(id))
            .catch(err=>console.log(err))
    }



    return (
        <>
            {
                products.map((product,index)=>{
                    return (
                        <div key={index}>
                            <p >{product.title}</p>
                            <Link to={`/${product._id}`}>View</Link>
                            <Link to={`/edit/${product._id}`}>Edit</Link>
                            <Link to={'/'}>
                                <button onClick={e=>deleteProduct(product._id)} >Delete</button>
                            </Link>
                        </div>
                        )
                })
            }
        </>
    )
}


export default ProductList