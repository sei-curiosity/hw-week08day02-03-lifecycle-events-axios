import React, { Component } from 'react';
import memesData from '../data/memesData';
import Meme from '../components/Meme'
class Memegen extends Component {
  state = { 
            formImage: {
                title: "",
                image: ""
            },
            
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
         }
    
    handleChange = event => {
        const key = event.target.name
        const value = event.target.value
        this.setState( ({...copyState}) =>{
            copyState.formImage[key] = value
            return copyState
        } )
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
        const image = {
            title: this.state.formImage.title,
            image: this.state.formImage.image,
            id: this.state.allMemeImgs.length + 1
        }
        console.log(image)

        this.setState (({... copyState})=> {
            copyState.allMemeImgs.push(image)
            copyState.formImage = {
                title: "",
                image: ""
            }
            return copyState
        })
       
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
                <form  onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input name="title" 
                    value={this.state.formImage.title} onChange={this.handleChange} />
                    <br />
                    <label>url</label>
                    <input name="image" 
                    value={this.state.formImage.image} onChange={this.handleChange} />

                    <br />

                    <input type="submit"/>
                </form>
                ${this.state.allMemeImgs.map(img => {
                   return (
                    <Meme image={img.image} title={img.title} delete={this.deleteMeme} id={img.id}/>
                   ) 
                })}
                
            </div>
         );
    }
}
 
export default Memegen;