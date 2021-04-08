import { faEdit, faHome, faPlus, faShippingFast, faTasks, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import edit from './Group 307.png';
import delet from './Group 33150.png';
import './DeleteProduct.css';

const DeleteProduct = () => {
    const [importDelete, setimportDelete] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5030/getdata')
            .then(res => res.json())
            .then(data => {
                setimportDelete(data);
            })
    }, [])
    const productDelete = (id ,) => {
        console.log('product id: ', id)
        fetch(`http://localhost:5030/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('delete succfully' ,result)
            })
    }
    return (
        <div>
            <section className="admin-section container-fluid">
                <div className="row">
                    <div className="left-side-bar col-3">
                        <h2><FontAwesomeIcon icon={faShippingFast} /> E-Bazar</h2>
                        <div className="add-section-sizing">
                            <Link class="nav-link home-path " to="/home"><h5 ><FontAwesomeIcon icon={faHome} /> Back to Home</h5></Link>
                            <Link class="nav-link home-path " to="/manag-pd"><h5 ><FontAwesomeIcon icon={faTasks} /> Manage Product</h5></Link>
                            <Link class="nav-link home-path " to="/admin"><h5 ><FontAwesomeIcon icon={faPlus} /> Add Product</h5></Link>
                            <Link class="nav-link home-path " to="/edit"><h5 ><FontAwesomeIcon icon={faEdit} /> Edit Product</h5></Link>
                        </div>
                    </div>
                    <div className="filed he-f col-9">
                        <h3>Delete Product</h3>
                        <table style={{ textAlign: 'center' }} class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">$ Price</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    importDelete.map(product => <tr>
                                        <td>{product.name}</td>
                                        <td>{product.weight}</td>
                                        <td>1</td>
                                        <td>$ {product.price}</td>
                                        <button onClick={()=>productDelete(product._id, )}><FontAwesomeIcon icon={faTrashAlt} /> delete</button>
                                        {/* <img onClick={()=>productDelete(product._id)} style={{width:'55px'}} src={delet} alt=""/> */}
                                    </tr>

                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DeleteProduct;