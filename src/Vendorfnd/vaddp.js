import React from 'react';
import styled from "styled-components";
//import Logo from './logo.jpg';
export default function Dashboard() {

  return(
    <FormContainer> 
    <form action='POST'>
      <center><h1>ADD PRODUCT</h1>
      
      <br/>
    <table border='0'>
        <tbody>
        <tr>
            <td><label>Product Image </label></td>
            <td><input type="file" id="img" name="img" accept="image/*"/></td>
        </tr>
        <br/>
            <tr>
                <td><label>Product Name</label></td>
                <td><input type="text" placeholder="" name="Product Name" required/></td>
            </tr>
            <br/>
            <tr>
                <td><label>Product Company</label></td>
                <td><input type="text" placeholder="" name="Product Company" required/></td>
            </tr>
            <br/>
            <tr>
                <td><label>Product Size</label></td>
                <td><input type="" placeholder="" name="Product Size" required/></td>
            </tr>
            <br/>
            <tr>
                <td><label>Product Colour</label></td>
                <td><input type="" placeholder="" name="Product Colour" required/></td>
            </tr>
            <br/>
            <tr>
                <td><label>Product Price</label></td>
                <td><input type="" placeholder="" name="Product Price" required/></td>
            </tr>
            <br/>
            <tr><td colSpan={2}><center><button onClick={() => alert('Product Added Successfully !!')}>ADD</button></center></td>
     </tr>
      </tbody>
      </table>
      </center>
    </form>
    </FormContainer> 

  );

}
const FormContainer = styled.div`
height: 150vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  h1{
    color: white;
      text-transform: uppercase;
  }
  label{
    color: white;
      text-transform: uppercase;
  }
  h4{
    color: white;
      text-transform: uppercase;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 60%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }

`;