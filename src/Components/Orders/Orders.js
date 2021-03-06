import React, { useContext, useEffect, useState } from 'react';
import { UserContex } from '../../App';
import NavBar from '../NavBar/NavBar';
import './Orders.css';

const Orders = () => {
    const [logedInUser, setLogedInUser] = useContext(UserContex);
    const [orderCollection, setOrderCollection] = useState([])
    useEffect(() => {
        fetch('https://calm-journey-93046.herokuapp.com/orderDetails?email=' + logedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrderCollection(data)
            })
    }, [])
    return (
        <div>
            <NavBar></NavBar>
            <div className="user-name container ">
                <h1>Hello <span style={{ color: '#f00c32' }}> {logedInUser.name}</span> Sir Here Is Your - {orderCollection.length} Order $ </h1>
            </div>
            <h5 className="container" style={{ color: 'rgb(33, 21, 199)', borderRadius: '30px', padding: '5px', textAlign: 'center', background: 'lightgray' }}>your email: {logedInUser.email} </h5>
            <div className="container ">
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
                        <div className="spinnered2">
                            {
                                orderCollection.length === 0 &&
                                <div className="spinner-border" style={{ width: ' 3rem', height: ' 3rem', }} role="status">
                                </div>
                            }
                            {
                                orderCollection.length === 0 && <p>Loading...</p>
                            }
                        </div>

                        {
                            orderCollection.map(product => <tr>
                                <td>{product.productName}</td>
                                <td>{product.weight}</td>
                                <td>1</td>
                                <td>$ {product.price}</td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;