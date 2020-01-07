import React, { Component } from 'react';
import Meme from './Meme'
import './theme.css'
class Memegen extends Component {
    constructor(props){
super(props)
this.state ={

    topText:"",
    bottomText:"",
    // randomImg:"http://i.imgflip.com/1bij.jpg",
    // randomTitle:"whatever",
    arrayOfMeme:props.data,
    theme:true,
   deleted:''
}
    }
  
    handleSubmit= event => {
      event.preventDefault()
      const randNum = Math.floor(Math.random() * this.state.arrayOfMeme.length)
        const randMemeImg = this.state.arrayOfMeme[randNum].image
        const randMemeTitle= this.state.arrayOfMeme[randNum].title
        this.setState({randomImg: randMemeImg,randomTitle:randMemeTitle})

    }
handleChange= event => {
const {name , value} = event.target
this.setState({

[name]:value


})
console.log("this.name")
}
showTheme = ()=>{
    // const { show } = {...this.state.visible}
    this.setState ({
        theme: !this.state.theme
    })
}
deleteMemes =()=>{
    // const { show } = {...this.state.visible}
    this.setState ({ arrayOfMeme: [],deleted:"No Memes Available"})
    
  }

    render() { 
        // let titles = this.state.arrayOfMeme.map(e =><Meme title={e.title} image={e.image} id={e.id}> </Meme>)
        let themee
      
        if(this.state.theme){
            themee ="theme1"
         }else { themee ="theme2"}

         

    return ( <div className={themee}>
<button onClick={this.deleteMemes}>Delete all</button>
 <button onClick={this.showTheme}>Change the theme</button>

        <form className="meme-form" onSubmit={this.handleSubmit}>

            <input type="text" name="topText" placeholder="Top Text" value={this.state.topText} onChange={this.handleChange}/>
            <input type="text" name="bottomText" placeholder="Bottom Text" value={this.state.bottemText} onChange={this.handleChange}/>
            <button >Generate</button>
    <h1>{this.state.deleted}</h1>
           </form>
           <div className="meme">
           {/* <h2 className="title">{this.state.randomTitle}</h2>
               <img src={this.state.randomImg} alt=""/> */}
                {/* <h2 className="title">{this.state.randomTitle}</h2> */}
               <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                    {this.state.arrayOfMeme.map(e =><Meme title={e.title} image={e.image} key={e.id} > </Meme>)}

           </div>
    </div> );
    }
}
 
export default Memegen;