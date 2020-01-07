import React, { Component } from 'react';

class Meme extends Component {
    state = {
        visible: false
    }
    handleClick = () => this.setState({visible: !this.state.visible})
    render( ) { 
        let meme = this.props.memeObj
        return ( 
            <div onClick={this.handleClick}>
                <h1>{meme.title}</h1>
                { this.state.visible ? <img src={meme.image} alt="" width="300px"/> : null}
            </div>
         );
    }
}
 
export default Meme;