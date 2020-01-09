import React, { Component } from 'react'

class Lyfcycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "Ahmed"
        }
    }
    UNSAFE_componentWillMount() {
        console.log("componentwillmount is loaded")
    }

    getData() {
        setTimeout(() => {
            console.log("Our fake data is getting fetched")
            this.setState({
                data: "SEI 9 Class"
            })
        }, 2000);
    }

    componentDidMount() {
        this.getData()
    }
    render() {
        return (
            <div>
                {this.state.data}
                {console.log("render state data loaded")}
            </div>


        )
    }
}

export default Lyfcycle