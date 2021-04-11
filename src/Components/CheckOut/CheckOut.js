import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import './CheckOut.css';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router';
import { UserContex } from '../../App';

const CheckOut = () => {
    const [logedInUser, setLogedInUser] = useContext(UserContex);
    const [uniqepProduct, setUniqepProduct] = useState({});
    const { imageUrl, name, price, weight, _id } = uniqepProduct
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://calm-journey-93046.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setUniqepProduct(data)
            })
    }, [id])
    const handleFinalCheckOut = () => {
        const userDetails = { imageUrl: imageUrl, productName: name, weight: weight, price: price, ...logedInUser, orderDate: new Date() }
        console.log(userDetails);
        fetch('https://calm-journey-93046.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Congratulation sir Your order is placed')
                }
            })
    }
    return (
        <div className="container">
            <div className="positioning">
                <NavBar></NavBar>
            </div>
            <h1>CheckOut</h1>
            <div className="tbl-box-shadow">
                <table style={{ textAlign: 'center' }} class="table  table-hover">
                    <thead>
                        <tr>
                            <th style={{ borderTop: 'none' }} scope="col">Description</th>
                            <th style={{ borderTop: 'none' }} scope="col">Quantity</th>
                            <th style={{ borderTop: 'none' }} scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody className="border-none">
                        <tr>
                            <td>{name}</td>
                            <td>1</td>
                            <td>$ {price}</td>
                        </tr>
                        <tr>
                            <td>product id: {_id}</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="border-bottom">
                            <td>Total :</td>
                            <td></td>
                            <td>$ {price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="btn-checkOut">
                <Button variant="contained" onClick={handleFinalCheckOut} style={{ background: '#76ff03' }} >CheckOut</Button>
            </div>
        </div>
    );
};

export default CheckOut;