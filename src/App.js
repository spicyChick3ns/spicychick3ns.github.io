import React, { Component } from 'react';
import ContactItem from './components/ContactItem';
import './App.css';
import config from './config';

const TITLES = ['wood worker', 'ukulele shredder', 'software engineer'];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'software engineer',
    }
  }
  things = (cb) =>{
    let i = 0;
    setInterval(() => {
      if (i === TITLES.length) { 
        i=0;
        clearInterval();
      }
      this.setState({
        word: TITLES[i],
      });
      console.log(TITLES[i])
      i++;
    }, 1000)
  }
  componentDidMount() {
    this.things();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>melissa gonzales</h1>
          <h3>{`I am a ${this.state.word}`}</h3>
        </header>
        <main>
          <div className="contact-container">
              <ContactItem type='github' url={config.github}/>
              <ContactItem type='instagram' url={config.instagram}/>
              <ContactItem type='file' url={config.resume}/>
              <ContactItem type='envelope' url={config.email}/>
          </div>
        </main>

      </div>
    );
  }
}

export default App;

