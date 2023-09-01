import React, {  useState } from 'react'
import axios from 'axios'

const ProductForm = (props) => {
    const [title,setTitle]=useState("")
    const [price,setPrice]=useState(0)
    const [description,setDescription]=useState('')
    const {products,setProducts}=props
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/product',{
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
                setProducts([...products,res.data])
                setTitle('')
                setDescription('')
                setPrice('')
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <>
            <h2>Product Manager</h2>
            <form onSubmit={onSubmitHandler}>
                Title: <input type='text' value={title} onChange={e=>setTitle(e.target.value)}/>
                Price: <input type='number' value={price} onChange={e=>setPrice(e.target.value)} />
                Description: <input type='text' value={description} onChange={e=>setDescription(e.target.value)} />
                <button  type='submit'  >Create</button>
            </form>
        </>
    )
}

export default ProductForm