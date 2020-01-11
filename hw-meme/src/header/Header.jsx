import React from 'react';

function Header () {
    let imgLink = "http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
    return(
        <header>
            <img src={imgLink} alt="" width="200" height="200"/>
        </header>
    )
}

export default Header