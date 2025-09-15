import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

// lets try to use in as function
function MyApp(){
    return (
        <div>
            Hello this is an example...
        </div>
    )
}
// const reactElement={
//     type:'a',
//     props: {
//         href:'https://www.youtube.com',
//         target: '_blank'

//     },
//     children: 'click me to visit youtube'
// }
// lets create an another object 
const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit google</a>
)
const anotheruser=" chai le lo chai"

//now create element using React.createElement
const reactElement=React.createElement(
    // it takes object and the syntax is predefined
    // it takes three arguments: type, props, and children
    'a',
    { href: 'https://google.com', target: '_blank' },
    'click me to visit google',
    anotheruser
)
ReactDOM.createRoot(document.getElementById('root')).render(

   // <App />
    reactElement     // this will not work as this is an object and the syntax of the object isnot defined properly..
    //anotherElement      // this will work becauese the sysnatx is correct and it is a valid JSX element this is a object representation of a React element.
)
