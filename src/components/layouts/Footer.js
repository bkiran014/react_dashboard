import React, {Component} from 'react';

const Footer = () =>  {
    const footerStyles ={
        background: '#004b84',
        color: '#fff',
        padding: '10px'
    }
    return(
        <div className="container-fluid footer navbar-fixed-bottom" style={footerStyles}>
            <div className="container">
                <p style={{margin:'auto'}} className="text-center">&copy;2021. All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;