import React,{Component} from 'react'

class Meme extends Component{
    constructor(props){
        super(props)
        this.state={
            visible :false

        }}
        HandeleClick= ()=>{
            const {visible}=this.state
            this.setState({visible: !visible})
                
            

        }
       

        render(){
          const {visible} =this.state
            return(<div><h1 onClick={this.HandeleClick}>{this.props.title}</h1>
            {this.state.visible&&
                (<img src={this.props.image}/>)}
                <button onClick={() => this.props.onDelet(this.props.id)}>Delete</button>
                    </div>)
        }
    }

export default Meme
