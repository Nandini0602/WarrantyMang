import React from 'react';
import Laptop from "./laptop.jpeg";
import { useNavigate } from 'react-router-dom';
export default function Cproduct() {
    let navigate = useNavigate();

    return(
        <table>
            <tr>
                <td><img src={Laptop} alt="laptop.jpeg"/></td>
                <td>Name : Laptop (MACBOOK)<br/>
                    Company : 2022 Apple MacBook Air Laptop with M2 chip<br/>
                    Size : 34.46 cm (13.6-inch) Liquid Retina Display<br/>
                    Color : Silver<br/>
                    Price : 132000</td>
            </tr>
            <tr>
                <td colSpan={2}><button type="button"  onClick={() => {navigate('/cbuy')}}>Buy Now</button></td>
            </tr>
        </table>
    );

}