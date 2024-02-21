import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h3>this is my fist function</h3>
  )
}



const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target: '_blank'},
  'visit here'
)


ReactDOM.createRoot(document.getElementById('root')).render(
    
    reactElement
    
    
)
