import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css';
import logo from '../../image/barcelona.jpg';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        total = total + player.salary;
    }

    return (
        <div className="cart-container">
            <div className="image">
                <img src={logo} alt="" />
            </div>

            <h1>DASHBOARD FC BARCELONA</h1>
            <br />
            <h2>Club Summary</h2>
            <br />
            <h3>Selected Players: <FontAwesomeIcon icon={faFutbol} /> {cart.length} </h3>
            <br />
            <h4>Salary per weekly : <FontAwesomeIcon icon={faHandHoldingUsd} /> {total}  </h4>
        </div>
    );
};

export default Cart;