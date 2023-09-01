import axios from 'axios'
import React ,{useState,useEffect}from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditProduct = (props) => {
    const [title,setTitle]=useState("")
    const [price,setPrice]=useState(0)
    const [description,setDescription]=useState('') 
    const navigate=useNavigate()
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res=>{
                setTitle(res.data.title)
                setDescription(res.data.description)
                setPrice(res.data.price)
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    },[])
    const updateProduct=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/${id}`,{
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res.data);
                navigate('/') //This will lead us back to home page
            })
            .catch(err=>console.log(err))
    }
    return (
    <div>
        <h1>Update Product</h1>
        <form onSubmit={updateProduct}>
            <div>
                <label>Title: </label>
                <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price: </label>
                <input type='number' value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description: </label>
                <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <button type='submit'>Edit</button>
        </form>
    </div>
    )
}

export default EditProduct