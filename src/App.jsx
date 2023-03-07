import { useState } from 'react'
import './App.css'
import { Select } from 'antd'


function App() {
  const fruits = ['Banana', 'Orange','Apple','Grapefruit']

  return (
    <div className="App">
      <header className='App-header'>
        <p>Which is your favourite fruit?</p>
        <Select 
        maxTagCount={2}
        allowClear
        mode='multiple' 
        placeholder="Select Fruits" 
        style={{width:'100%'}}>
          {fruits.map((fruit,index)=>{
            return <Select.Option key={index} value={fruit}></Select.Option>
          })}
        </Select>
      </header>

    </div>
  )
}

export default App
