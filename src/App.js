import './App.css';
import ShowMessage from './components/ShowMessage';

function App() {
  return (
    <div className="App">
      <ShowMessage bgColor="black" />
      <ShowMessage bgColor="gray" />
    </div>
  );
}

export default App;
