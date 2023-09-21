import React from 'react'
import  { useState } from 'react'
import './App.css'

export const App = () => {
  const[pk,setPk]=useState(0)
  const inc=()=>{
    setPk(pk+1)
    
  }
  const dec=()=>{
    setPk(pk-1)
  }
  
  
 
  return (
    <>
    <div className='nav'>
    <h1 className='count'>Counter App:{pk}</h1>
    </div>
    <div className='btn-1'>
    <button className='btn'onClick={inc}>Add Value</button>
    <button className='btn'onClick={dec}>less Vlaue</button>
    </div>
    
    </>
  )
  }
export default App;