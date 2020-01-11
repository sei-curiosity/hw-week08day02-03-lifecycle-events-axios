import React, { Component } from 'react';
import memesData from '../data/memesData';
import Meme from '../components/Meme'
class Memegen extends Component {
  state = { 
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
         }
    
    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]:value})
        console.log(name)
    }
    deleteMeme = (id) => {
        this.setState (({... copyState})=> {
            copyState.allMemeImgs = copyState.allMemeImgs.filter (meme => {
                return meme.id != id
            }) 
            return copyState
            //filter means if conditon is true return else do not return
        })
    }

    componentDidMount(){

          this.setState({allMemeImgs: memesData})
          //first render
          //did mount => function that you put anything in it
          // after calling the render we want the images
    }

    handleSubmit = event => {
        event.preventDefault()
        const randNum = Math.floor(Math.random()*this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].image
        this.setState({randomImg: randMemeImg}) 
    }
    deleteAllMeme = () => {
        this.setState( ({...copyState}) => {
        copyState.allMemeImgs = []
        return copyState
        }) 
    }

    render() { 
        return ( 

            <div>
                <button onClick={this.deleteAllMeme}>delete all meme</button>
                <form className="meme-form" onSubmit={this.handleSubmit}>

                    <input type="Text" name="topText" placeholder="Top Text" 
                    value={this.state.topText} onChange={this.handleChange} />

                    <input type="Text" name="bottomText" placeholder="Bottom Text" 
                    value={this.state.bottomText} onChange={this.handleChange} />

                    <button>Generate</button>
                </form>
                ${this.state.allMemeImgs.map(img => {
                   return (
                    <Meme image={img.image} title={img.title} delete={this.deleteMeme} id={img.id}/>
                   ) 
                })}
                <div className="meme">
                    <img src={this.state.randomImg} alt="" width="400" height="400" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
                
            </div>
         );
    }
}
 
export default Memegen;