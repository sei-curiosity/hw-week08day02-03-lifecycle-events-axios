import React, { Component } from 'react';
import array from '../data/memes'
import Meme from '../components/Meme'
class Memegen extends Component {
    state = {
        imageForm : { 
        title: "",
        url: ""
        },
        allMemeImgs: []
    }
    deleteAll = () => {
        this.setState (({...copyState}) => {
            copyState.allMemeImgs = []
            return copyState
        })
    }
    deleteMe = (id) => {
        this.setState(({...copyState}) => {
            copyState.allMemeImgs = copyState.allMemeImgs.filter(meme => meme.id != id)
            return copyState
        })
        
    }
    handleChange = event => {
        const key = event.target.name
        const value = event.target.value 
        this.setState( ({...copyState}) => {
            copyState.imageForm[key] = value
            return copyState
        })
    }

    componentDidMount(){
        this.setState({allMemeImgs: array})
    }

    handleSubmit = event => {
        event.preventDefault()
       const image = {
           title: this.state.imageForm.title,
           image: this.state.imageForm.url,
           id: this.state.allMemeImgs.length + 1
       }
       this.setState( ({...copyState}) => {
           copyState.allMemeImgs.push(image)
           copyState.imageForm = { 
            title: "",
            url: ""
            }
            return copyState
       })
    }
    render() { 
        return ( 
            <div>
                <button onClick = {this.deleteAll}> Delete All</button>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input name="title" onChange={this.handleChange} value={this.state.imageForm.title}/>
                    <br />
                    <label>Url</label>
                    <input name="url" onChange={this.handleChange} value={this.state.imageForm.url}/>
                    <br />
                    <input type="submit" />
                </form>
                <div>
                    
                   { this.state.allMemeImgs.map(img=>{
                        return (
                            <div> 
                                <Meme image={img.image} id={img.id} title={img.title} deleteMe={this.deleteMe}/>
                             </div>
                        )
                   }) }
                </div>
            </div>
         );
    }
}
 
export default Memegen;