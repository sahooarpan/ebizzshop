import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'

const Product = ({name,price,productImage,createdBy}) => {
    const auth = useSelector((state) => state.user);
    const { userInfo } = auth;
    useEffect(() => {
        console.log(userInfo,createdBy);
        return () => {
            
        }
    }, [])    
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
         {}  <p className="text-secondary mt-2 search-name card-text">
             Posted By: {createdBy}
          </p>
           {/* <div className="d-flex">           
          <p className="text-primary mt-2 search-name card-text mr-2">
          <i class="fa fa-thumbs-up mr-1" aria-hidden="true"></i>{post && post.likes && post.likes.length}
          
          </p>
          <p className="text-success mt-2 search-name card-text">             
          <i class="fa fa-comments mr-1" aria-hidden="true"></i>{post && post.comments && post.comments.length}
          </p>
          </div> */}
      {userInfo?._id === createdBy?"Yes":"No"}
        </div>
      </div>  
      )
}

export default Product
