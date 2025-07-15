import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

  const [title , setTitle] = useState("");
  const [image , setImage] = useState("");
  const [price , setPrice] = useState("");
  const [dis , setDis] = useState("");

  const pageLink = useNavigate()


  const addProduct = async () =>{
    const api = "http://localhost:3000/products";

    let response = await fetch(api , {
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        title:title,
        image:image,
        price:price,
        discripation:dis
      })
    })
    const data = await response.json();

    if(data){
      alert("Product Saved");
      pageLink("/admin")
    }
  }


  return (
    <div>
      <div>
        <h2>
          Add Product Page
        </h2>
        <div className='row justify-content-center mt-5'>
            <div className='col-lg-6 col-md-8 col-sm-12'>
                <div className='bg-white rounded shadow p-4 border border-info'>
                    <div className='mb-3'>
                      <input type='text' placeholder='Enter Title' className='form-control' onChange={(e)=>{setTitle(e.target.value)}} />
                    </div>
                    <div className='mb-3'>
                      <input type='url' placeholder='Enter Image' className='form-control' onChange={(e)=>{setImage(e.target.value)}} />
                    </div>
                    <div className='mb-3'>
                      <input type='number' placeholder='Enter Price' className='form-control' onChange={(e)=>{setPrice(e.target.value)}} />
                    </div>
                    <div className='mb-3'>
                      <textarea rows='5' placeholder='Enter Discripation' className='form-control' onChange={(e)=>{setDis(e.target.value)}}></textarea>
                    </div>
                    <div className='text-center'>
                      <button className='btn btn-info' onClick={addProduct}>Add Product</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
