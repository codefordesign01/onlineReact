import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {

  const [product , setProduct] = useState([]);
  const [loading , setLoding] = useState(false);
  const [curentPage , setCurentPage] = useState(1);
  const [totalPage , setTotalPage] = useState(1);

  const limit = 6;

  useEffect(()=>{
    getProducts(curentPage);
    setLoding(true);
  },[curentPage])

  const getProducts = async (pageNumber)=>{
    const url = `http://localhost:3000/products?_page=${pageNumber}&_limit=${limit}`;
    let response = await fetch(url);
    const totalProduct = response.headers.get('X-Total-Count');
    response = await response.json();
    setProduct(response);
    setLoding(false);
    setTotalPage(Math.ceil(totalProduct/limit));
    console.log(curentPage)
    
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
          <div className='d-flex justify-content-center'>
            <ul className="pagination">
              <li  className="page-item " ><button disabled={curentPage === 1}  onClick={()=>setCurentPage(curentPage -1)}  className="page-link" >Previous</button></li>
              {[...Array(totalPage)].map((_, index) => (
                <li key={index} className='page-item'> <button onClick={()=>{setCurentPage(index + 1)}} className="page-link" >{index + 1}</button></li>
              ))}
              <li className="page-item"><button disabled={curentPage === totalPage} onClick={()=>setCurentPage(curentPage + 1)} className="page-link" >Next</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
