import React from 'react'
import axios from 'axios'
import './Memes.css'

class Memes extends React.Component{
    constructor(props){
        super(props)
        
        this.state ={
            allMemes: [],
            meme: {
                name:"",
                url:"",
                width:"400",
                height:"400",
                id: ""
            },
            memeId: "",
            imgStatus: false,
            topText:"",
            bottomText:"",
            randomImg:"https://i.imgflip.com/345v97.jpg"
        }
    }
    
    componentDidMount(){
        axios.get(`https://api.imgflip.com/get_memes`)
        .then(res => {const allMemes = res.data.data.memes
            this.setState({allMemes})
            
        })
    }
    handleMemeTitleClick = (memeId) => {
            this.setState(({...preState})=>{
                preState.imgStatus = !this.state.imgStatus
                preState.memeId = memeId;
                preState.imgStatus = !this.state.imgStatus;
                return preState
       })    
    }
    deleteAllMemes = () => {
        let allMemes = this.state.allMemes.slice()
        allMemes =[]
        this.setState({allMemes})
    }
    deleteThisMeme = (memeId) => {
        let allMemes = this.state.allMemes.slice()
        allMemes = allMemes.filter(meme => meme.id !== memeId)
        this.setState({allMemes})
    }
    handleSaveChange = (e) => {
        const allMemes = this.state.allMemes.slice()
        const memeKey = e.target.name
        const memeVal = e.target.value
        const meme = {...this.state.meme}
        const ID = allMemes.length !== 0 ?(allMemes[allMemes.length-1].id) + 1 : '1' 
        meme.id = ID
        meme[memeKey] = memeVal
        this.setState({meme})
    }
    handleSaveSubmit = (e) => {
        e.preventDefault()
        const meme = this.state.meme
        const allMemes = this.state.allMemes.slice()
        allMemes.push(meme)
        this.setState({allMemes})
    }
    handleWriteChange = (e) => {
        const {name,value} = e.target
        // here we put the var to become a key for state
        this.setState({ [name]: value})
    }
    handleWriteSubmit = (e) => {
        e.preventDefault()
        const random = Math.floor(Math.random()* this.state.allMemes.length)
        
        const randMemeImg = this.state.allMemes[random].url  
        this.setState(({...preState}) => {
            preState.randomImg = randMemeImg
            return preState 
        })
       
    }
    render(){
       
        return(
            
            <div>
                <form onSubmit={this.handleSaveSubmit}>
                    <input type='text' name='name' placeholder="Enter meme title" value={this.state.meme.name} onChange={this.handleSaveChange}/>
                    <input type='text' name='url' placeholder="Enter meme url" value={this.state.meme.url} onChange={this.handleSaveChange}/>
                    <button type="submit">Save</button>
                </form>
                <form onSubmit={this.handleWriteSubmit}>
                    <input type="text" name="topText" placeholder="Enter Top Text" value={this.state.topText} onChange={this.handleWriteChange} />
                    <input type="text" name="bottomText" placeholder="Enter Bottom Text" value={this.state.bottomText} onChange={this.handleWriteChange} />
                    <button type="submit">Generate</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="meme"/> 
                    <h2 className="top">{this.state.topText}</h2>
                     <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
                {/* <button onClick={this.deleteAllMemes}>Delete All Memes</button>
                 {this.state.allMemes.map(meme => { return (
                        <div key={meme.id}>
                        
                            <h1 onClick={()=>this.handleMemeTitleClick(meme.id)}>{meme.name}</h1>
                            <button onClick={()=>this.deleteThisMeme(meme.id)}>delete</button>
                            {meme.id === this.state.memeId && this.state.imgStatus ? 
                            <img src={meme.url} alt={meme.name} width={meme.width} height={meme.height} /> : null }
                            <br/>
                            
                            <br/><hr/>
                        </div>
                    )}) 
                    }    */}
            </div>
        )
    }
}
export default Memes;