import React, {Component} from 'react'


class Lifecycle extends Component {

    constructor(props){
    super(props)
    this.state ={
        data: "Ahmed"
    }

    }
componentWillMount(){
    console.log("componentwillmount is loaded")
  }

  getData () {
    setTimeout(()=> {
         console.log("Our fake data is getting feteched")
         this.setState({
             data: "SEI 9 Class"
         })
    }, 2000)
}

componentDidMount(){
   this.getData()
}
    render(){
        return(
            <div>
             {this.state.data}
             {console.log("state data loaded")}
            </div>

        )
    }
}

export default Lifecycle; 