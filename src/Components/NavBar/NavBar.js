import React, { useContext } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from './Ecommerce-BTL.jpg';
import { UserContex } from '../../App';

const NavBar = () => {
    const [logedInUser, setLogedInUser] = useContext(UserContex);
    console.log(logedInUser)
   
    return (
        <div>
            <div>
                <div style={{ backgroundColor: ' #e3f2fd' }} className="navbar-light ">
                    <nav class="navbar navbar-expand-lg navbar-light  container nav-color ">
                        <div class="container-fluid">
                            <Link class="navbar-brand nav-color" rel="noreferrer" to="/home">Home</Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class=" nv collapse navbar-collapse" id="navbarText">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <Link class="nav-link active nav-color" aria-current="page" to="/order">Orders</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link active nav-color" aria-current="page" to="/admin">Admin</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link active  nav-login-btn" aria-current="page" to="/login">log in</Link>
                                    </li>
                                </ul>
                                <span style={{ display: 'flex' }} >
                                    <h3 style={{ marginRight: '15px', display: 'flex' }}>E-Bazar<h5>{logedInUser.name}</h5></h3>
                                    {

                                        logedInUser.email ? <img style={{ width: '50px', borderRadius: '7px' }} src={logedInUser.photo} alt="" />
                                        :
                                        <img style={{ width: '50px', borderRadius: '7px' }} src={logo} alt="" />
                                    }
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;