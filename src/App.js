import logo from './logo.svg';
import './App.css';
import Voicerecognitionstest from './components/voicerecognitionstest';
import { WebcamProvider } from './Context/WebcamContext';
import { SpokenWordProvider } from './Context/SpokenWordContext';
import Webcam from './components/webcam';
import WebcamStart from './pages/webcamStart';
import Photo from './components/Photo';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <WebcamProvider>
        <SpokenWordProvider>
          <Voicerecognitionstest />
          {/* <Webcam /> */}
          {/* <WebcamStart /> */}
          {/* <Photo /> */}
        </SpokenWordProvider>
      </WebcamProvider>
    </div>
  );
}

export default App;
