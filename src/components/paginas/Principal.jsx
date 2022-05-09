import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
const Princiapl = () => {
    return (  
        <Fragment>
            <div className='container-fluid text-center'>
                <h1>APP PARA CREAR USUARIO</h1>
                <br/>
                <img src="https://image.shutterstock.com/image-vector/welcome-white-paper-banners-color-260nw-693251611.jpg" alt="" />
         
            <div className='mt-2'>
                <button><Link to={'/app'} className='btn' style={{color: 'white'}} >COMENSAR APP</Link></button>
            </div>
            </div>
        </Fragment>
    );
}


export default Princiapl;