import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { deleteProduct } from '../actions/productActions';

const Product = ({name,price,productImage,createdBy,id}) => {
    const auth = useSelector((state) => state.user);
    const { userInfo } = auth;
    const dispatch=useDispatch();
    useEffect(() => {
        console.log(userInfo,createdBy);
        return () => {
            
        }
    }, [])    

    const handleDelete=()=>{
        dispatch(deleteProduct(id))
    }
    return (
        <div className="card product-card align-self-xs-center mt-4 post-dashboard">
        <img className="card-img-top card-image" src={productImage} alt={name}/>
        <div className="card-body">
          <h4 className="text-primary search-name card-text">
              {name}
          </h4>
          <p className="text-secondary mt-2 search-name card-text">
             Price: {price}
          </p>
         
         
      {userInfo?._id === createdBy?<div className="d-flex justify-content-between">
        <Link className="btn btn-primary" to={`/update-product/${id}`}>Edit</Link>
        <button className="btn btn-danger" onClick={()=>handleDelete(id)}>Delete</button>
      </div>:""}
        </div>
      </div>  
      )
}

export default Product
