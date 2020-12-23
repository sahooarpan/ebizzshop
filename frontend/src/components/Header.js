import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
<nav class="navbar navbar-expand-md navbar-light bg-light">
    <a class="navbar-brand" href="#">EShop</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="#">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Register</a>
            </li>
        </ul>
    </div>
</nav>    )
}

export default Header
