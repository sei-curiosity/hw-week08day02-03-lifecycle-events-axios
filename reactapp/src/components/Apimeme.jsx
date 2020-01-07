import axios from 'axios';
import React from 'react';

class Apimeme extends React.Component {
    state = { 
        memes: []
     }
    render() { 
        let memes = this.state.memes
        return ( 
            <div>
                {memes.map(meme=>(
                    <React.Fragment>
                        <h1>{meme.name}</h1>
                        <img src={meme.url} alt="" width="300px"/>
                    </React.Fragment>
                ))}
            </div>
         );
    }
    componentDidMount(){
        let url = "https://api.imgflip.com/get_memes"
        axios.get(url)
        .then((response)=>{
        // handle success
        const memes = response.data.data.memes
        this.setState({memes})
        })
    }
}
 
export default Apimeme;