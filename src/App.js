import React, { Suspense, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
// import ProgressBar from './components/ProgressBar';//importar de forma estática
const ProgressBar = React.lazy(() => import('./components/ProgressBar'));//importar de forma dinámica


function App() {
  const [showProgressBar, setShowProgressBar] = useState(false);
  return (
    <div className="App">
      <Suspense fallback={'loading'}>
        {showProgressBar && <ProgressBar />}
      </Suspense>
      <button onClick={() => setShowProgressBar(!showProgressBar)}>Mostrar/Ocultar ProgressBar</button>
      {/* initialCounter se le pasa como props por donde empieza el Counter */}
    </div>
  );
}

export default App;
