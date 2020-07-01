import React from 'react';
import logo from './logo.svg';
import './App.css';
import KvbView from './Pages/KvbView'
import AppBar from '@material-ui/core/AppBar';
function App() {
  return (
    <div> <AppBar style={{height : '10%' ,  backgroundColor : 'green'}}><h2>International KVB</h2></AppBar>
      <KvbView />
     </div>
  );
}

export default App;
