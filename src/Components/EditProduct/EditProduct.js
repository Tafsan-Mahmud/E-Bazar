import { faEdit, faHome, faPlus, faShippingFast, faTasks, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import edit from './Group 307.png';
import './EditProduct.css';
import { Button } from '@material-ui/core';

const EditProduct = () => {
    const [importDelete, setimportDelete] = useState([]);
    const [changeData, setChangeData] = useState([])
    const [singleProduct, setsingleProduct] = useState([])

    useEffect(() => {
        fetch('https://calm-journey-93046.herokuapp.com/getdata')
            .then(res => res.json())
            .then(data => {
                setimportDelete(data);
            })
    }, [importDelete])
    const productEdit = (id) => {
        fetch(`https://calm-journey-93046.herokuapp.com/editProduct/${id}`)
            .then(res => res.json())
            .then(result => {
                setsingleProduct(result)
            })
    }

    function updateing(id) {
        const name = document.getElementById('name').value
        const price = document.getElementById('price').value
        const weight = document.getElementById('weight').value
        // const { name, price, weight } = changeData;
        const product = { id, name, price, weight }
        fetch(`https://calm-journey-93046.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Edite Successfully Done please close the system')
                }
            })
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => setChangeData(data);
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
                        <div id="vanish" >
                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 style={{ color: 'rgb(87, 5, 182)', fontWeight: '500' }} class="modal-title" id="staticBackdropLabel">Edit Product </h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div id="update-formm" class="modal-body">
                                            <form className="container update-input-filed" onSubmit={handleSubmit(onSubmit)}>
                                                <input name="name" id="name" defaultValue={singleProduct.name} className="form-control" type='text' placeholder="enter name" ref={register} required />

                                                <input name="price" id="price" defaultValue={singleProduct.price} className="form-control" type='text' placeholder="enter price" ref={register} required />

                                                <input name="weight" id="weight" defaultValue={singleProduct.weight} className="form-control" type='text' placeholder="enter weight" ref={register} required />

                                                <Button type="submit" onClick={() => updateing(singleProduct._id)} className="btn-buy" variant="contained" color="secondary"> <span style={{ marginLeft: '5px' }}> Save To Database</span></Button>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filed he-f col-9">
                        <h3>Edit Product</h3>
                        <table style={{ textAlign: 'center' }} class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price $</th>
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
                                        <td><img data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => productEdit(product._id)} style={{ width: '45px' }} src={edit} alt="" /></td>
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

export default EditProduct;