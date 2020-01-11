import React, { Component } from 'react';
class Meme extends Component {
    state = {  
        Meme:false
    }
onClickhandler = () =>{

    this.setState(({...copyState})=>{
        if (copyState.Meme===true) {
            copyState.Meme = false
        }
        else
        copyState.Meme = true

        return copyState
    })
   
}
    render() { 
        return ( 
        // <h1>Hi {this.props.im}</h1>
        <div onClick={this.onClickhandler}>
            
            <h3>{this.props.title}</h3>
            {this.state.Meme ?<img  src={this.props.image}></img> : null}
            <button onClick={() => this.props.delete(this.props.id)}>Delete</button>
        </div>
         );
    }
}
 
export default Meme;