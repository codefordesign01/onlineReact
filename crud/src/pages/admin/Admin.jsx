import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {

 const [data , setData] = useState([]);
 const [loading , setLoading] = useState(false)

 useEffect(()=>{
  getProducts();
  setLoading(true)
 },[])

 const getProducts = async () =>{
  const api = "http://localhost:3000/products";
  let response = await fetch(api);
  response = await response.json();

  setData(response);
  setLoading(false)

 }


  const deleteProduct = async (id)=>{
   const api = "http://localhost:3000/products/" + id;
   let response = await fetch(api , {
    method:"DELETE"
   })
   response = await response.json();
    if(response){
     alert("your Product Deeleted");
     getProducts();
    }
  }

  return (
    <div>
      
       <div className='d-flex justify-content-between'>
         <h2>Admin Page</h2>
         <Link className='btn btn-info' to="/addProduct">Add New Product</Link>
       </div>
      <table class="table table-striped border mt-5">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Image</th>
          <th scope="col">Pridce</th>
          <th scope="col">Discripation</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
        <tbody>
         {
          !loading ?
          data.map((product)=>(
           <tr key={product.id}>
            <th scope="row">{product.id}</th>
            <td>{product.title}</td>
            <td><img src={product.image} width="100" /></td>
            <td>{product.price}</td>
            <td>{product.discripation}</td>
            <td>
             <button className='btn'>
              <i class="fa-solid fa-pen-to-square text-info"></i>
             </button>
             <button className='btn'>
              <i class="fa-solid fa-eye text-success"></i>
             </button>
             <button className='btn ' onClick={()=>{deleteProduct(product.id)}}>
              <i class="fa-solid fa-trash text-danger"></i>
             </button>
            </td>
          </tr>
          ))
          : <div className='bg-white shadow  rounded border m-auto' style={{height:"400px" , width:"800"}}>
           <h1>Data Loading ....</h1>
          </div>
         }
          
        </tbody>
      </table>
    </div>
  )
}

export default Admin
