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
        fetch('https://calm-journey-93046.herokuapp.com/getdata')
            .then(res => res.json())
            .then(data => {
                setimportDelete(data);
            })
    }, [importDelete])
    const productDelete = (id,) => {
        fetch(`https://calm-journey-93046.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Delete Successfull')
                }
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
                            <Link class="nav-link home-path " to="/deletProduct"><h5 ><FontAwesomeIcon icon={faTasks} /> Manage Product</h5></Link>
                            <Link class="nav-link home-path " to="/admin"><h5 ><FontAwesomeIcon icon={faPlus} /> Add Product</h5></Link>
                            <Link class="nav-link home-path " to="/editProduct"><h5 ><FontAwesomeIcon icon={faEdit} /> Edit Product</h5></Link>
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
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <div className="spinnered">
                                {
                                    importDelete.length === 0 &&
                                    <div className="spinner-border" style={{ width: ' 3rem', height: ' 3rem', }} role="status">
                                    </div>
                                }
                                {
                                    importDelete.length === 0 && <p>Loading...</p>
                                }
                            </div>
                            <tbody>

                                {
                                    importDelete.map(product => <tr>
                                        <td>{product.name}</td>
                                        <td>{product.weight}</td>
                                        <td>1</td>
                                        <td>$ {product.price}</td>
                                        {/* <button onClick={()=>productDelete(product._id)}><FontAwesomeIcon icon={faTrashAlt} /> delete</button> */}
                                        <td> <img onClick={() => productDelete(product._id)} className="img-admin-manage" src={delet} alt="" /></td>
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