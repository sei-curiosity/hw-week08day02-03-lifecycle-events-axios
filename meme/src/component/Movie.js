import React ,{Component} from 'react'

class Movie extends Component {
    

    render(){
        
        return(
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.director}</p>
            </div>
        )
    }
}
export default Movie 