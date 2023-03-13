import React from 'react';
import Laptop from "./laptop.jpeg";
export default function Cbuy() {

    return(
        <div>
        <img src={Laptop} alt="laptop.jpeg"/>
        <br/> 
        <button onClick={() => alert('Bill Paid Successfully !!')}> PAY </button>
        </div>
    );

}