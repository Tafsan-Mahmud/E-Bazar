import React, { useState } from 'react';
import './Admin.css';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faTasks, faPlus, faEdit, faHome, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Admin = () => {
    const axios = require('axios').default;
    const [imageURL, setImageURL] = useState(null);
    const handleImgUpload = (event) => {
        const imageData = new FormData()
        imageData.set('key', '338a7d2633146965aa14730462081a12')
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (res) {
                setImageURL(res.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageUrl: imageURL
        };
        const url = `https://calm-journey-93046.herokuapp.com/addProduct`;

        console.log(eventData)
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                console.log('server side response', res)
                alert("Product data uploaded")
            })
    };
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
                    <div className="filed col-9">
                        {/* <div className="filed2"> */}
                        <h3>Add Product</h3>
                        <div className="input-filed container-lg">
                            <form className="d-flex row" onSubmit={handleSubmit(onSubmit)}>
                                <div className="name-price col-4">
                                    <h6>Product Name</h6>
                                    <input className="form-control" name="name" ref={register} placeholder="type product name" required />

                                    <h6>Add Price</h6>
                                    <input className="form-control" name="price" ref={register} placeholder="type product price" required />
                                </div>
                                <div className="weight-UPimg col-4">
                                    <h6>Weight</h6>
                                    <input className="form-control" name="weight" ref={register} placeholder="type product weight" required />

                                    <h6>choose a photo</h6>
                                    <input name="image_URL" id="file" required type="file" accept="image/*" onChange={handleImgUpload} />
                                    <label htmlFor="file"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Photo</label>
                                </div>
                                <input type="submit" value="Save To Database" />
                            </form>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Admin;