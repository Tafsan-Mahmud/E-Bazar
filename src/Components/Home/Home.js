import React, { useEffect, useState } from 'react';
import DisplyProduct from '../DisplyProduct/DisplyProduct';
import NavBar from '../NavBar/NavBar';
import Button from '@material-ui/core/Button';
import './Home.css';


const Home = () => {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        fetch('https://calm-journey-93046.herokuapp.com/getdata')
            .then(res => res.json())
            .then(data => {
                setProductData(data)
            })
    }, [])
    return (
        <div >
            <div className="sticky-top">
                <NavBar></NavBar>
            </div>
            <div className="input-group mb-3 mt-5 container">
                <Button variant="contained" style={{ backgroundColor: "rgb(99, 199, 60)", color: "white" }} >Search</Button>
                <input type="text" className="form-control" placeholder="search what you need" aria-label="Example text with button addon" aria-describedby="button-addon1" />
            </div>
            <div className="spinneredh">
                {
                    productData.length === 0 &&
                    <div className="spinner-border" style={{ width: ' 3rem', height: ' 3rem', }} role="status">
                    </div>
                }
                {
                    productData.length === 0 && <p>Loading...</p>
                }
            </div>
            <div id="cardBox" >

                {
                    productData.map(pd => <DisplyProduct product={pd} key={pd._id} ></DisplyProduct>)
                }
            </div>
        </div>
    );
};

export default Home;