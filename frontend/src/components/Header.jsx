import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { logOut } from '../actions/userActions'
const Header = () => {

    const dispatch = useDispatch();
    const handleLogout=()=>{
        dispatch(logOut());
    }
    const auth = useSelector((state) => state.user);

    const guestLinks=(
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <Link to='/signin' class="nav-link" href="#">Login</Link>
            </li>
            <li class="nav-item">
                <Link to='/register' class="nav-link" href="#">Register</Link>
            </li>
        </ul>
    )

    const authLinks=(
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <Link to='/create-product' class="nav-link">Create Product</Link>
            </li>
            <li class="nav-item">
                <Link to='/shop' class="nav-link" href="#">{auth?.userInfo?.name}</Link>
            </li>
            <li class="nav-item">
                <Link to='/shop' class="nav-link" href="#">Shop</Link>
            </li>
            <li class="nav-item">
                <Link onClick={handleLogout} class="nav-link" href="#">Logout</Link>
            </li>
        </ul>
    )

return (
<nav class="navbar navbar-expand-md fixed-top navbar-light bg-light">
    <Link to='/' class="navbar-brand">EShop</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
     {auth?.userInfo?authLinks:guestLinks}   
        
    </div>
</nav>    )
}

export default Header
    