import {  useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { createproducts } from './Create';
import List from './List';

function App() {
  const [count, setCount] = useState(0);
  const products=useContext(createproducts)
  




  return (
    <div>
        <createproducts.Provider value={products}>
            <List/>
        </createproducts.Provider>
        
    </div>
    
  )
}

export default App
