import React, { Component } from 'react';
import axios from 'axios'
// import memeList from "./data/MemeData";
import Meme from "./Meme";

class Memegen extends Component {
    constructor(){
        super( )
        this.state={
            title:"",
            image:"",
            allMemeImgs:[],
            //  memeList,
            theme:false
        }
    }

    handleSubmit=event=>{
        event.preventDefault()
        
        const {title, image}=this.state
        console.log(title,image)
        this.setState(({...PrevState})=>{
            PrevState.allMemeImgs.push({id:PrevState.allMemeImgs.length+1 ,name:title,url:image})
            
            return PrevState
        })
            

    
    }
    


    handleChange =event=>{
        const {name,value}= event.target
        this.setState({[name]: value})
    }
    deleteMemes=()=>{
        this.setState({allMemeImgs:[]})
    }
    deleteMeme =(id)=>{
        this.setState(({...PrevState})=>{
            PrevState.allMemeImgs = PrevState.allMemeImgs.filter(meme=>{
               return meme.id !== id
            })
            return PrevState
        })
        
    }

    theme=()=>{ //// color theme
        const {theme} =this.state
        this.setState({
            theme : !theme
        })
    }
    
    render() { 

        const container =(this.state.theme)? "container":""
        return ( 
            <div className={container} >
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.handleChange}/>
                    <input
                    type="text"
                    name="image"
                    placeholder="Image"
                    value={this.state.image}
                    onChange={this.handleChange}/>
                    <button>save</button>
                    
                </form>
                <button className="delete" onClick={this.deleteMemes}>Delete All Memes</button>|||||||
                <button className="delete"  onClick={this.theme}>Theme</button>

                {this.state.allMemeImgs.map((meme,index)=> (
        <Meme  key={index} id={meme.id} title={meme.name} image={meme.url} delete={this.deleteMeme}></Meme>
     ))}
                
                
            </div>
         );

    }
    componentDidMount(){
        axios.get(`https://api.imgflip.com/get_memes`)
        .then(respons=>{
           const listMemes=respons.data.data.memes
           this.setState({allMemeImgs:listMemes})
           console.log(respons.data.data.memes)
        })
    }

}
 
export default Memegen;