import Chai from './chai.jsx';
function App() {
  const username="chai nhi pene h janab"
  return (
    <>
    <Chai/>
    <h1>chai or react {username}</h1> 
    <p>test para</p>
    </>
    // upar <h1></h1> k ander jo username {} inn brackets m likha vo variable k trh treat hoga
  
  )
  // {username} isme usename expression hota hai or jo y pura {username} hota ha y evaluated expression hota hai
}

// jo bhi `` k andar likha hoga wo string ban jayega
// or yadi hmm `` ke andar ${} likhte hai to wo variable ki value ko print karega



export default App
