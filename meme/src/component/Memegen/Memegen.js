import React,{Component} from 'react'
import memeList from'../../memes'
import Meme from '../Meme/Meme'

class Memegen extends Component{
    constructor(props){
        super(props)
        this.state={
            toptext:'',
            bottomText:'',
            RandomImg:'http://i.imgflip.com/1bij.jpg',
            allMemeImgs:[],
            theme:false
        }
    }
    handelChane =(event)=>{
        {const {name,value}=event.target
    this.setState({[name]: value})}

    }
    delteeMem = id => {
    
        let copyState = {...this.state}
        copyState.allMemeImgs = copyState.allMemeImgs.filter(mem => mem.id !== id)

        this.setState(copyState)
    }

    componentDidMount(){
        this.setState({allMemeImgs:memeList})
    }
    handelSubmit =(event)=>{
        event.preventDefault()
        const randNum=Math.floor(Math.random()*this.state.allMemeImgs.length)
        const randomImg= this.state.allMemeImgs[randNum].image
        this.setState({RandomImg:randomImg})
        
    }
    handleThemeChange =()=>{
    const {theme}=this.state
    this.setState({theme:!theme})
    }
     deleteAll=()=>{
        const {theme}=this.state
        this.setState({allMemeImgs:[]})
        
    }

    render(){
        const themeClass=(this.state.theme)? 'className':''
        return(
            
            <div className={themeClass}>
                <button onClick={this.deleteAll}>Delete All memes</button>
                <button onClick={this.handleThemeChange}>chang the Theme</button>
                {this.state.allMemeImgs.map(meme=>{return(<Meme title={meme.title} onDelet={this.delteeMem} image={meme.image} id={meme.id} />)})}
                <form className='mem-form' onSubmit={this.handelSubmit}><input 
                type='text'
                name='topText'
                placeholder='Top Text'
                value={this.state.topText}
                onChange={this.handelChange}/>
                <input type='text'
                name='ButtonText'
                placeholder='button Text'
                value={this.state.topText}
                onChange={this.handelChange}/>
                <button>Generte</button>
                </form>
                <div className='meme'>
                    <img src={this.state.RandomImg} alt="" width='300' height='300' /> 
                    <h2 className = 'top'>{this.state.toptext}</h2>  
                    <h2 className = 'bottom'>{this.state.bottomText}</h2>         
                 </div>
</div>
        )
    }
    
}
export default Memegen