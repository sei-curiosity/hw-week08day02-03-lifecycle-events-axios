import React, { Component } from 'react';

class Meme extends Component {
    constructor(){
        super( )
        this.state={
            visible:false,
            topText:"",
            bottomText:""
        }
    }

    handleClick=()=>{
        const {visible} =this.state
        this.setState({
            visible: !visible
            
        })
    }
    handleChange = event => {
        const {name, value} = event.target
        this.setState({ [name]: value})
    }

  
    render() { 
        const {visible} =this.state
        
        return ( 
            <div >
                <div >
                    <h2 onClick={this.handleClick} >{this.props.title}</h2>
                    {visible &&  (
                        <div>
                            
                            <form className="meme-form" >
                                <input
                                type="text"
                                name="topText"
                                placeholder="Top Text"
                                value={this.state.topText}
                                onChange={this.handleChange} />
                                <input
                                type="text"
                                name="bottomText"
                                placeholder="Bottom Text"
                                value={this.state.bottomText}
                                onChange={this.handleChange} />
                            </form>

                            <div className="meme">
                                <img src={this.props.image} width="400" height="400" alt={this.props.title}/>
                                <h2 className="top">{this.state.topText}</h2>
                                <h2 className="bottom">{this.state.bottomText}</h2>
                            </div>

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