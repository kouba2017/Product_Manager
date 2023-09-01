import React, { useEffect } from 'react'
import axios from 'axios'

const ProductList = (props) => {
    const {products,setProducts}=props
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data)
                console.log(res.data);
            })
            .catch(err=>console.log('ERROR: ',err))
    },[])


    return (
        <div>
            {
                products.map((product,index)=>{
                    return <p key={index}>{product.title}</p>
                })
            }
        </div>
    )
}


export default ProductList