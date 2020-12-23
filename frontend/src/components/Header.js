import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
<nav class="navbar navbar-expand-md fixed-top navbar-light bg-light">
    <Link class="navbar-brand" href="#">EShop</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <Link class="nav-link" href="#">Login</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" href="#">Register</Link>
            </li>
        </ul>
    </div>
</nav>    )
}

export default Header
