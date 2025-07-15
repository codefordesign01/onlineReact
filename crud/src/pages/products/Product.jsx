import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {

  const [product , setProduct] = useState([]);
  const [loading , setLoding] = useState(false);

  useEffect(()=>{
    getProducts();
    setLoding(true);
  },[])

  const getProducts = async ()=>{
    const url = "http://localhost:3000/products";
    let response = await fetch(url);
    response = await response.json();
    setProduct(response);
    setLoding(false);
    
  }

  return (
    <div>
      <div className='bg-light py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 mb-5'>
                <h1>Our Products</h1>
            </div>
            {
              !loading ? 
              product.map((data)=>(
                  <div className='col-lg-4 col-md-6 col-sm-12 mb-4' key={data.id}>
                    <Card className='border-info shadow'>
                      <Card.Img variant="top" src={data.image} height="300px" style={{objectFit:"cover"}} />
                      <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <p><b>Price : $ {data.price}</b></p>
                        <Card.Text>
                          {
                            data.discripation
                          }
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                  
              ))
              :<div className='bg-white shadow rounded d-flex justify-content-center align-items-center ' style={{height:"400px"}}>
                <h1>Data Loading ....</h1><div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
              </div>
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
