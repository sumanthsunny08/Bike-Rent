import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {One} from './components/one/One'
import {Two} from './components/two/Two'
import {Three} from './components/three/Three'
import {Four} from './components/four/Four'
import {Five} from './components/five/Five'
import {Six} from './components/six/Six'
import {Seven} from './components/seven/Seven'

function App() {
  return (
    <div className="App">
      <One></One>
      <Two></Two>
      <Three></Three>
      <Four></Four>
      <Six></Six>
      <Seven></Seven>
    </div>
  );
}

export default App;
