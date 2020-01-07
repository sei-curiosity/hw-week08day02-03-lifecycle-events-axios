import React, { Component } from 'react';

function Header () {
    return(
        <header>
            <img 
            src="data:image/jpeg;base64,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"
            alt=""
            width="100"
            height="100"
            />
            <p>Mem Generator</p>
        </header>
    )
}
export default Header;