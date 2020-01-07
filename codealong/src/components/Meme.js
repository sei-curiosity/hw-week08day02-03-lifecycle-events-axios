import React , {Component} from 'react';
class Meme extends Component {
    constructor(props){
        super(props)
        this.state = {  
            id:props.id,
           title:props.title,
           image:props.image,
           visible:false

         
        }
        }
        showHiden = ()=>{
            // const { show } = {...this.state.visible}
            this.setState ({
                visible: !this.state.visible
            })
        }

    render() { 
        let showHide =""
        let button
       
        if(this.state.visible){
            showHide = <img src={this.state.image} alt=""></img>
            button = "Hide"
            console.log( "always true")
         }else { showHide= ""
        button = "Show"
       console.log( "this.state.visible")}
        return ( 
        <React.Fragment>
            
        <h1 ><a onClick={this.showHiden}>{this.state.title}</a></h1>
      
       {showHide}
  
        
       </React.Fragment>);
    }
}
 
export default Meme;

