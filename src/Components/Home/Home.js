import React, { useEffect, useState } from 'react';
import DisplyProduct from '../DisplyProduct/DisplyProduct';
import NavBar from '../NavBar/NavBar';
import Button from '@material-ui/core/Button';
import './Home.css';


const Home = () => {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5030/getdata')
            .then(res => res.json())
            .then(data => {
                setProductData(data)
                console.log(data)
            })
    }, [])
    return (
        <div >
            <div className="sticky-top">
            <NavBar></NavBar>
            </div>
            <div className="input-group mb-3 w-50 mt-5 container">
                <Button variant="contained" style={{ backgroundColor: "rgb(99, 199, 60)", color: "white" }} >Search</Button>
                <input type="text" className="form-control" placeholder="search what you need" aria-label="Example text with button addon" aria-describedby="button-addon1" />
            </div>
            <div id="cardBox" >
               {
                    productData.length === 0 && 
                    <div className="spinner-border" style={{width:' 3rem',height:' 3rem' ,textAlign:'center', alignContent:'center', alignItems:'center', justifyContent:'center' , justifyItems:'center'}} role="status">
                  </div>
                }
             
                {
                    productData.map(pd => <DisplyProduct product={pd} key={pd._id} ></DisplyProduct>)
                }
            </div>
        </div>
    );
};

export default Home;