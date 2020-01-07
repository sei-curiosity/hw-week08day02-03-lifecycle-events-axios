import React from 'react';
import Memes from './components/memes/Memes'
import './App.css';

class App extends React.Component {
  state={
    pageTheme: false
  }
  handlePageThemeclick = () => {
    console.log(this.state.pageTheme)
    const preState = !this.state.pageTheme
    this.setState({pageTheme: preState})
  }
  render(){
    const themeStatus = this.state.pageTheme ? "Memetheme" : ""
    console.log(themeStatus)
    return (
          <div className = {themeStatus}>
            <button onClick = {this.handlePageThemeclick} >Change Theme</button>
            <Memes />
          </div>
      );
    }
  }
export default App;
