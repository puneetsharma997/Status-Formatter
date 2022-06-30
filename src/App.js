import React from 'react'
import './App.css';
import StatusFormatter from './component/StatusFormatter/StatusFormatter';


const App = () => {

  return (
    <div className='App'>
      
      <StatusFormatter active={true}  />

    </div>
  )
}

export default App;


