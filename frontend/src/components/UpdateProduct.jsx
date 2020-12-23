import React,{ useState } from 'react'

const UpdateProduct = () => {

    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [productImage,setProductImage] = useState('');
    


    return (
        <div className="d-flex justify-content-center ">
        
        <form className="form-container bg-light">
        
        <h3 className="display-4 text-primary">Create Product</h3>

            <div class="form-group">
            <label for="name">Product Name</label>
            <input type="text" class="form-control" id="email" 
            name="name" placeholder="Enter name" 
            required value={name} onChange={e=>setName(e.target.value)} />
            </div>
            <div class="form-group">
            <label for="price">Product Price</label>
            <input type="number" class="form-control" 
            id="price" name="price" placeholder="Price" required value={price} 
            onChange={e=>setPrice(e.target.value)} />
            </div>
            <div class="form-group">
            <label for="image">Product Image</label>
            <input type="text" class="form-control" 
            id="image" name="password" placeholder="Paste Image URL Here" required value={productImage} 
            onChange={e=>setProductImage(e.target.value)} />
            </div>
            <button disabled={name === "" || productImage==="" || price===""} type="submit" class="btn btn-primary px-3">Submit</button>
        </form>
        </div>
    )
}

export default UpdateProduct
