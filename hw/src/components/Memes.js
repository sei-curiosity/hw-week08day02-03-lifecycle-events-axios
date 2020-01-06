import React, { Component } from 'react';
import memesInfo from "./data/memesInfo";
import Meme from "./Meme";

class Memes extends Component {
    constructor(props){
        super(props)
        this.state = {  
        allMemes: [],
        theme: false
        }
    }// end constructor


    componentDidMount(){ // after rendering Memes component, we will assign the array we brought from data to the empty array of the state of the initilaized instance state
        this.setState({ allMemes: memesInfo})
    }

    changeTheme = () => {
        let { theme } = this.state // taking a copy of the key theme from the state object
        this.setState({
            theme: !theme
        })
    }
    
    render() { 
        let { theme } = this.state // last updated value of theme in the object state after rendering everything else, I think this is why it's recommended to take a copy of the object state
        let arr = this.state.allMemes
        let cname = (theme) ? 'new' : '' // the className upon changing it

        return ( 
            <div>
                <form className={`meme-form ${cname}`}>
                    Title
                    <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    />

                    Image
                    <input
                    type="text"
                    name="image"
                    placeholder="Image"
                    />
                    <button>Save Meme</button>
                    
                </form>
                    <button onClick={this.changeTheme}>Change Theme</button>
                    
                    {arr.map( (meme, index) => {
                    return <Meme className={cname} key={index} id={meme.id} title={meme.title} img={meme.image}/>
                    
                     } )}

            </div>
         );
    }
}
 
export default Memes;