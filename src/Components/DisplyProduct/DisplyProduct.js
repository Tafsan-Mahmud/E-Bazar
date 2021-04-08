import React from 'react';
import Button from '@material-ui/core/Button';
import './DisplyProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const DisplyProduct = (props) => {
    const { name, price, weight, imageUrl , _id } = props.product;
    const history = useHistory();

const handleCheckOut= (id) =>{
    history.push(`/checkOut/${id}`)
   
}

    return (
        <div>
            <div className="containerr">
                <div className="heading">

                </div>
                <div className="roww">
                    <div className="cardd">
                        <div className="card-headerr">
                            <img src={imageUrl} alt="" />
                        </div>
                        <div className="card-body">
                            <h3>{name}</h3> <p>{weight}</p>
                        </div>
                        <div className="d-flex p-b">
                            <h2> {price}</h2>
                            <Button onClick={()=>handleCheckOut(_id)} className="btn-buy" variant="contained" color="secondary"> <FontAwesomeIcon icon={faShoppingCart} /> BUY NOW..</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplyProduct;