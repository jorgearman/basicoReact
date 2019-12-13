import React, {Fragment} from 'react';
import './App.css';

import Header from './components/Header';
import Foter from './components/Footer';
import ListaProductos from './components/ListaProductos';
import PrimerComponente from './components/PrimerComponente';


function App() {

  const fecha = new Date().getFullYear();


  return (
    <Fragment>
      {/* <PrimerComponente />
      <SegundoComponente /> */}

      <Header 
       titulo = 'Tienda Virtual' 
      />
      <PrimerComponente />
      <ListaProductos />
      
      <Foter 
        fecha = {fecha}
      />
    </Fragment>
  );
}

export default App;
