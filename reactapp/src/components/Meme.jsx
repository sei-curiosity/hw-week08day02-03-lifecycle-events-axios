import React, { Component } from 'react';
import Memegen from "../memegen/Memegen"

class Meme extends Component {
    state = {
        visiable: false
    }
    visibableFunc = () => {
        // this.state.visiable= !this.state.visiable
        this.setState(({...copyState})=>{
            copyState.visiable= !copyState.visiable
            return copyState
        })
    }
    render (){
        return (
            <div onClick={this.visibableFunc}>
                <h1>{this.props.title}</h1>
                {this.state.visiable ? <img  src={this.props.image}/> : null}
                <button onClick={() => this.props.deleteMe(this.props.id)}>Delete Me</button>
            </div>
        )
    
        }
}
export default Meme