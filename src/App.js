import './App.css';
import Counter from './components/Counter';
import ProgressBar from './components/ProgressBar';


function App() {
  return (
    <div className="App">
      <ProgressBar/>
      {/* initialCounter se le pasa como props por donde empieza el Counter */}
    </div>
  );
}

export default App;
