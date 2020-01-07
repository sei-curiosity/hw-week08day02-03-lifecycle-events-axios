import React,{Component} from 'react'
import meme from "../data/memes"
import Meme from '../meme/Meme'
class Memegen extends Component{
    constructor(props){
    super(props)
        this.state={
            toptext:'',
            bottomText:'',
            RandomImg:'http://i.imgflip.com/1bij.jpg',
            allMemeImgs:[],
            
        } }
    handelChane =(event)=>{
        {const {name,value}=event.target
    this.setState({[name]: value})}

    }
    deleteMeme = id => {
     let copyState = {...this.state}
        copyState.allMemeImgs = copyState.allMemeImgs.filter(meme => meme.id !== id)

        this.setState(copyState)}

    componentDidMount(){
        this.setState({allMemeImgs:meme})
      }
    handelSubmit =(event)=>{
      event.preventDefault()
        const randNum=Math.floor(Math.random()*this.state.allMemeImgs.length)
        const randomImg= this.state.allMemeImgs[randNum].image
        this.setState({RandomImg:randomImg})
        }
    
     deleteAll=()=>{
        this.setState({allMemeImgs:[]})

    }

    render(){
        
        return(

            <div>
                <button onClick={this.deleteAll}>Delete All memes</button>
                {this.state.allMemeImgs.map(meme=>
                    {
                        return(
                        <Meme 
                        title={meme.title} onDelet={this.deleteMeme} image={meme.image} id={meme.id} />
                        )
                    }
                    )
                }
                <form className='meme-form' onSubmit={this.handelSubmit}><input 
                type='text'
                name='title'
                placeholder='Title'
                value={this.state.title}
                onChange={this.handelChange}/>
                
                <input type='text'
                name='image'
                placeholder='Image'
                value={this.state.title}
                onChange={this.handelChange}/>
                <button>Save Meme</button>
              </form>
                <div className='meme'>
                    <img src={this.state.RandomImg} alt="" width='400' height='400' /> 
                    <h2 className = 'title'>{this.state.title}</h2>  
                    <h2 className = 'image'>{this.state.image}</h2>         
                 </div>
</div>
        )
      }
    }
    export default Memegen