import React, { Component } from 'react';

class Lyfecycle extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            data: "Ahmed"
         }
    }

    UNSAFE_componentWillMount(){
        console.log("componenetWillMount is loaded")
    }

    getData(){
        setTimeout(()=>{
            console.log("Our fake data is getting fetched")
            this.setState({
                data: "SEI 9 Class"
            })
        },200)
    }

    componentDidMount(){
        console.log("did")
        this.getData()
    }

    render() { 
        return ( 
            <div>
                {this.state.data}
                {console.log("render state data loaded")}
            </div>
         );
    }
}
 
export default Lyfecycle;