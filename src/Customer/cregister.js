import React from 'react'
const Vregister = () => {
    return (
        <>
        <div>
        <center>
        <br/>
        <b>REGISTRATION FORM</b>
        
        <br/><br/>
        <form action="POST">
            <table>
                <br/><br/>
                <tbody>
                <tr>
                    <td><label htmlFor='uid'>Unique ID</label></td>
                    <td><input type="text" name="email" id="emal"/></td>
                </tr>
                <tr>
                    <td><label htmlFor='name'>Name</label></td>
                    <td><input type="text" name="name" id="name"/></td>
                </tr>
                <tr>
                    <td><label htmlFor='age'>Age</label></td>
                    <td><input type="text" name="age" id="age"/></td>
                </tr>
                <tr>
                    <td><label htmlFor='phone'>Phone</label></td>
                    <td><input type="text" name="phone" id="phone"/></td>
                </tr>
                <tr>
                    <td><label htmlFor='email'>Email ID</label></td>
                    <td><input type="email" name="email" id="email"/></td>
                </tr>
                <tr>
                    <td><label htmlFor='address'>Address</label></td>
                    <td><input type="text" name="address" id="address"/></td>
                </tr>
                <tr>
                    <td><label htmlFor='pcode'>Pin Code</label></td>
                    <td><input type="text" name="pcode" id="pcode"/></td>
                </tr>
                </tbody>
                <br/><br/>
                <tfoot>
                <tr>
                    <td colSpan='2'><center><button type='submit'>REGISTER</button></center></td>
                </tr>
                <br/>
                </tfoot>
            </table>
        </form>
        <br/><br/>
        </center>
        </div>
        </>
    )
}

export default Vregister
