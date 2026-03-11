import { useState ,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;
function Products(){
  const [products , setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    const getProducts = async () =>{
      try {
        const response = await axios.get(`${API_BASE}/api/${API_PATH}/products`)
        // console.log(response.data.products);
        setProducts(response.data.products);
      } catch (error) {
        console.log(error.response);
      }
    };
    getProducts();
  },[])


    const handleView = async (id) =>{
      navigate(`/product/${id}`)
    }
  return(
    <div className="container">
      <div className="row">
        {
          products.map(product =>(
            <div className="col-4 mb-3" key={product.id}>
              <div className="card">
                <img src={product.imageUrl} className="card-img-top object-fit-cover" style={{ height: '400px' }}  alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">價格:{product.price}</p>
                  <p className="card-text"><small className="text-body-secondary">{product.unit}</small></p>
                  <button type="button" className="btn btn-primary" onClick={()=>handleView(product.id)}>查看更多</button>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Products;