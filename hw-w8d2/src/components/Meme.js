import React, { Component } from 'react';

class Meme extends Component {
    constructor(){
        super( )
        this.state={
            visible:false
            
        }
    }

    handleClick=()=>{
        const {visible} =this.state
        this.setState({
            visible: !visible
            
        })
    }
  
    render() { 
        const {visible} =this.state
        
        return ( 
            <div >
                <div >
                    <h2 onClick={this.handleClick} >{this.props.title}</h2>
                    {visible && (
                        <div>
                           <img src={this.props.image} width="200" height="200" alt={this.props.title}/>
                           <br/>
                        <button className="delete" onClick={()=> this.props.delete(this.props.id)}>Delete</button>

                    </div>
                    )}
                      

                </div>
                
            </div>
         );
    }
}
 
export default Meme;