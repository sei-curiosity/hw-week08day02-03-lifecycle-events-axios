import React, { Component } from 'react';

class Meme extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false
        }
    }

    toggleMe = () => {
        let { visible } = this.state // // it's recommended to take a copy of the visible key to mutate it upon the click event
        this.setState({ 
            visible: !visible
        })
    }
    
    render() {
        let { visible } = this.state // it's recommended to take a copy
        let memeStyle = (visible) ? 'show' : 'hidden'
        // display the image in line 26 when the && condition is true based on the state of visible

        return ( 
            <div className={`${memeStyle}  ${this.props.className}`} id={this.props.id}>
                <h3 onClick={this.toggleMe}> {this.props.title} </h3>
                { visible && (<img src={this.props.img} alt=""/>) }
                
            </div>
        )
    }
}
 
export default Meme;