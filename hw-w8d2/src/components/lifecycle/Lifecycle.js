import React,{Component} from 'react'

class Lifecycle extends Component{
    constructor(props){
        super(props)
        this.state={
            data:'Mohammed'
        }
    }
    UNSAFE_componentWillMount(){
        console.log('compnentwillmount is loaded')

    }

    componentDidMount(){ 
        this.getData()
        console.log('componentDidMount is loaded')}


    getData(){
        setTimeout(() => {
            console.log('Our fake data is getting ')
            this.setState({data:'SEI 9'})},2000)
    }





    render(){
        return(<h1>{this.state.data}</h1>)
    }
}
export default Lifecycle;