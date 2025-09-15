import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: "john",
    age: 21
  }
  let arr=[10,20,30,40]
  return (
    <>
    <div className='bg-gray-400 rounded-xl flex justify-center'>
     <h1 className='bg-amber-400'>Tailwind Test</h1>
    </div>
    <Card someobj={myObj}></Card> 
    <Card someobj2={arr}></Card>
    </>

  )
}

// using html/ css in this we have 2 issue like first is that in jsx we can return only one element 
// that we have resolved using <></> which is a fragment and second is that we have to use className instead of class in jsx
// one more is that while using tailwind we have to use className instead of class in jsx
// and we need to insure that all the tags that we use is closed as well as we have multiple tags such as <img> tag and <a> that can be 
// ignored using /> at the last of the tag.....

export default App
