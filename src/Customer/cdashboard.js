import React from 'react';
import Laptop from "./laptop.jpeg";
import Mobile from "./mobile.jpeg";
import SmartTV from "./smartTV.jpeg";
import Smartwatch from "./smartwatch.jpeg";
import { useNavigate } from 'react-router-dom';
export default function Cdashboard() {
    let navigate = useNavigate();
    return(
        <center><h2>Dashboard</h2>
        <table border="1">
        <tbody>
            <tr>
                <td><img src={Laptop} alt="laptop.jpeg"/></td>
                <td><button type="button" onClick={() => {navigate('/cproduct')}}>View Product</button>
                    </td>
            </tr>
            <tr>
                <td><img src={Mobile} alt="mobile.jpeg"/></td>
                <td>Name : Mobile (128GB)<br/>
                    Company : Apple iPhone 13<br/>
                    Size : 750 x 1334<br/>
                    Color : Starlight<br/>
                    Price : 78565</td>
            </tr>
            <tr>
                <td><img src={SmartTV} alt="smartTV.jpeg"/></td>
                <td>Name : Samrt TV<br/>
                Company : LG<br/>
                Size : 108 cm (43 inches)<br/>
                Color : Ceramic Black<br/>
                Price : 32689</td>
            </tr>
            <tr>
                <td><img src={Smartwatch} alt="smartwatch.jpeg"/></td>
                <td>Name : Smart Watch<br/>
                    Company : Apple<br/>
                    Size : 45 MM<br/>
                    Color : Black<br/>
                    Price : 29900</td>
            </tr>
        </tbody>
        </table>
        </center>


        
    );

}