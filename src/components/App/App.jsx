import {Component} from 'react';
import './App.scss';
import Voting from '../Voting/Voting';
class App extends Component{
  render() {
    return (
        <div className="App">
            <Voting></Voting>
        </div>
    );
  }
}

export default App;
