import React, { Component } from 'react';

class Lyfcycle extends Component {
    constructor(props){
    super(props)
    this.state = {  

        data:"none"
    }
    }
  UNSAFE_componentWillMount(){
console.log("componentWillMount is loaded")
  }
  getData(){
setTimeout(()=>{
    console.log("our fitched data is getting fetched")
    this.setState({
         data:"SEI 9 Class"
    })
}, 2000)
  }
  componentDidMount(){
    console.log("componentDidMount is loaded")
    this.getData()
      }

    render() { 
        return ( <div> 
 {console.log("state data is loaded")}
{this.state.data}

        </div> 
            
            );
    }
}
 
export default Lyfcycle;