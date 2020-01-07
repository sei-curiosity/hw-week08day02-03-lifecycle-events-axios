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
            console.log('Our fake data is getting fitched!!')
            this.setState({data:'SEI 9 CLASS'})},5000)
    }




    
    render(){
        return(<h1>{this.state.data}</h1>)
    }
}
export default Lifecycle;
