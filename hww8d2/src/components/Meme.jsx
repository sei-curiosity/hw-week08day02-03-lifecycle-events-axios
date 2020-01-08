import React, { Component } from 'react';

class Meme extends Component {
    state = {
        images: [], 
        imageData: {
          title: "",
          description: "",
          url: ""
        }
      }
    
   imageDataHandler = (event) => {
    const key = event.target.name  //name in the input tage
    const value = event.target.value // value that user enter in the input tag
    this.setState(({...copyState}) => {
      copyState.imageData[key] = value
      return copyState
    })
  }
  onSubmitHandler = event => {
    event.preventDefault()
    this.setState(({...copyState}) => {
      copyState.images.push(copyState.imageData)
      copyState.imageData = {
        title: "",
        description: "",
        url: ""
      }
      return copyState
    })
  }
  render(){
    return (
      <div className="App">
        <form onSubmit={this.onSubmitHandler}>
          <label>Title:</label>
          <input 
            name="title"
            value={this.state.imageData.title}
            onChange={this.imageDataHandler}
          />
          <br />
          <label>Description:</label>
          <input
            name="description"
            value={this.state.imageData.description}
            onChange={this.imageDataHandler}
          />
          <br />
          <label>Url:</label>
          <input
            name="url"
            value={this.state.imageData.url}
          onChange={this.imageDataHandler}
          />
          <br />
          <input type="submit" />
        </form>
        <hr />
        {this.state.images.map(image => (
          <div>
            <img src={image.url} />
            <h4>{image.title}</h4>
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    );
  }
}
 
 
export default Meme;