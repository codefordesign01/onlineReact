import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewProdcut = () => {

 const pageId = useParams();
 const [data , setData] = useState({});

 useEffect(()=>{
  getProduct()
 }, [])

 const getProduct = async ()=>{
  const api = `http://localhost:3000/products/${pageId.id}`;

  let response = await fetch(api);
  response = await response.json();

  setData(response);
  console.log(response)
 }
  return (
    <div>
      <div className='d-flex justify-content-between'>
       <h1>View PRodcut {pageId.id}</h1>
       <Link to="/admin" className='btn btn-primary'>
       Back home
       </Link>
      </div>

      
      <div>
       <img src={data.image} />
       <h2>{data.title}</h2>
       <p>
        {data.price}
       </p>
       <p>
        {data.discripation}
       </p>
      </div>
    </div>
  )
}

export default ViewProdcut
