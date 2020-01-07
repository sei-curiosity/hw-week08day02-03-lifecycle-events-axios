import './App.css';

import React,{Component} from 'react';

import logo from './logo.svg';
import memesData from './components/Data/memesData'

class App extends Component {
  state={
    images: [],
    imageData:{
      title:"",
      image:""
    }
  }

  imageDatataHandler =(event) => {
    const key = event.target.name
    const value = event.target.value
    this.setState(({...prevState})=>{
      prevState.imageData[key] =value
      return prevState

    }
    )
  }
  onSubmithandeler = (event) =>{
    event.preventDefault()
    this.setState(({...prevState}) => {
      prevState.images.push(prevState.imageData)
      prevState.imageData={
        title:"",
      image:""
        
      }
      return prevState;

    })
    }
  render(){
  return (

    <div className="App">
    <form>
      <label>title:</label>
      <input name="title"
      value={this.state.imageData.title}
      onChange={this.imageDatataHandler}
       
       />
       

       <label>Image:</label>
       {this.state.images.map(image =>(
         <div>
           <img src ={image.images}/>
         </div>
       ))}

      </form>     
    
    </div>

  );
}
}

export default App;
