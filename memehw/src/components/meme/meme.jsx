import React, { Component } from 'react';
class Meme extends Component {
    state = { 
        show: false
     }
    handleClick = () => {
        const { show } = this.state
        this.setState({
            show : !show
        })
       
    }
    render() { 
        
        return ( 
            <div>
            <h3 onClick={this.handleClick}>{this.props.title}</h3>
            <div>
            {this.state.show ? <img src={this.props.img}  width="300px" height="300px"/> : null }
            </div>
            <button onClick={()=> this.props.delete(this.props.id)}>Delete meme</button>
                             </div>
         );
    }
}
 
export default Meme;