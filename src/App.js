import React, { Suspense, useEffect, useRef, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList/MovieList';
import ProgressBar from './components/ProgressBarClass';//importar de forma estática
// const ProgressBar = React.lazy(() => import('./components/ProgressBar'));//importar de forma dinámica


function App() {
  // const [showProgressBar, setShowProgressBar] = useState(false);
  // const inputRef = useRef(null)
  useEffect(() => {
    // document.querySelector('input')?.focus(); //bad practice
    // inputRef.current?.focus()
  }, )
  return (
    <div className="App">
      <MovieList/>
      {/* <Padre> */}
      {/* <Suspense fallback={'loading'}> */}
      {/* {showProgressBar && <ProgressBar />} */}
      {/* </Suspense> */}
      {/* <button onClick={() => setShowProgressBar(!showProgressBar)}>Mostrar/Ocultar ProgressBar</button> */}
      {/* </Padre> */}
      {/* initialCounter se le pasa como props por donde empieza el Counter */}
      {/* <input type="text" ref={inputRef} /> */}
    </div>
  );
}

export default App;
