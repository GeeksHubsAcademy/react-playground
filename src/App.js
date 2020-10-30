import React, { Suspense, useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './containers/MovieList/MovieList';
import ProgressBar from './components/ProgressBarClass';//importar de forma estática
import MovieDetail from './containers/MovieDetail/MovieDetail';
// const ProgressBar = React.lazy(() => import('./components/ProgressBar'));//importar de forma dinámica


function App() {
  // const [showProgressBar, setShowProgressBar] = useState(false);
  // const inputRef = useRef(null)
  useEffect(() => {
    // document.querySelector('input')?.focus(); //bad practice
    // inputRef.current?.focus()
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MovieList} exact />
          <Route path="/movie/:id" component={MovieDetail} exact />
        </Switch>
      </BrowserRouter>
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
