import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditProduct = () => {

  const pageID = useParams();
  const [title , setTitle] = useState("");
  const [image , setImage] = useState("");
  const [price , setPrice] = useState("");
  const [dis , setDis] = useState("");
  const pageLink = useNavigate();

  useEffect(()=>{
    getProducts();
  },[])

  const getProducts = async ()=>{
    const api = "http://localhost:3000/products/" + pageID.id;

    let response = await fetch(api);

    response = await response.json();
    
    console.log(response);

    setTitle(response.title);
    setImage(response.image)
    setPrice(response.price)
    setDis(response.discripation)
  }

  const updateProduct = async ()=>{
    const api = "http://localhost:3000/products/" + pageID.id;

    let response = await fetch(api , {
      method:"PUT",
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
    response = await response.json();
     if(response){
      alert("Yout Product Update success");
      pageLink("/admin")
     }
  }

  return (
    <div>
      <h1>Eidt Product {pageID.id}</h1>
      <div className='row justify-content-center mt-5'>
            <div className='col-lg-6 col-md-8 col-sm-12'>
                <div className='bg-white rounded shadow p-4 border border-info'>
                    <div className='mb-3'>
                      <input type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='Enter Title' className='form-control'  />
                    </div>
                    <div className='mb-3'>
                      <input type='url' value={image} onChange={(e)=>{setImage(e.target.value)}} placeholder='Enter Image' className='form-control'  />
                    </div>
                    <div className='mb-3'>
                      <input type='number' value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='Enter Price' className='form-control' />
                    </div>
                    <div className='mb-3'>
                      <textarea rows='5' value={dis} onChange={(e)=>{setDis(e.target.value)}} placeholder='Enter Discripation' className='form-control' ></textarea>
                    </div>
                    <div className='text-center'>
                      <button className='btn btn-info' onClick={updateProduct} >update Product</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProduct
