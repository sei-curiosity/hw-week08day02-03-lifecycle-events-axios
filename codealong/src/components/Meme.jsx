import React, { Component } from 'react';


class Meme extends Component {
    state = {
        id:"",
        title:"",
        image:"",
        memes:[],
        visible: false
    }
    constructor(props) {
        super(props)
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
            
        }
    }

    // componentDidMount() {
       
    //       this.setState({allMemeImgs: memeList})
    // }

    handleSubmit = event => {
        //not reload the page
    // prevent default action
    event.preventDefault()
    // get the formData from state
    const formData = this.state.formData;
    // copy of the movies state 
    const moviesCopy = [...this.state.movies]
    // push our formData into the movies copy
    moviesCopy.push(formData)
    this.setState({
      movies:moviesCopy,
      formData:{
        id:'',
        title:'',
        director:''
      }
    })
    }

handleChange = event => {
   // to get the value from input
   const userInput = event.target.value;
   // get which input they typed in
   const inputName = event.target.name;
   // copy the state of formData
   const formDataCopy = {...this.state.formData}
   // update the key in formDataCopy with new value
   formDataCopy[inputName] = userInput
   // set the state with the update formDataCopy
   this.setState({
    formData: formDataCopy
   })
}
deleteMemes = event => {

    const {id, value} = event.target
    this.setState({[id]: value})
}
deleteMeme = (id) =>{
    // copy the movies from state 
    let moviesCopy = [...this.state.movies];
    //[{},{},{}]
    // filter the array of movies
    moviesCopy = moviesCopy.filter( (movie) => (movie.id !== id))
    //[{},{}]
    this.setState({
     movies:moviesCopy
    })

    axios.delete(`https://api.imgflip.com/get_memes${this.state.id}`)
        .then(res =>{
            console.log(res)
            console.log(res.data)

         } )
   }

    render() {
     return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <label>Title</label>
     <input 
       name="title"
      value=""
       placeholder="Enter the title"
       onChange={this.handleChange}
        />
     <label>Image</label>
    <input 
    name="Image"
   value=""
   placeholder="Enter the iamge"
   onChange={this.handleChange}
    />

<button >Save Meme</button>
               </form>
               {this.props.title}
               {this.props.image}
               <button onClick={this.deleteMeme}>DeleteMemes</button>
               <button onClick={this.deleteMemes}>DeleteMemes</button>

   </div>

        )
    }
}

export default Meme