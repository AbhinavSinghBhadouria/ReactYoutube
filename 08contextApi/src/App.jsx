import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './context/Usercontext'
import { ThemeProvider } from '../../09contextApi/src/context/theme'

function App() {
  const [thememode, setThemeMode] = useState("light")

const lightTheme=()=>{
  setThemeMode('light')
}

const darkTheme=()=>{
  setThemeMode('dark')
}

// for actual change in the theme 
 useEffect(()=>{
  document.querySelector('html').classList.remove('light','dark')
  document.querySelector('html').classList.add(thememode)
 },[thememode])

// linie 12 m hmne ThemeProvider ko import kiya h jo hmne context m banaya h
// or hmne usse wrap kr diya h apne app ko
  return (
   <ThemeProvider value={{themeMode, lightTheme, darkTheme}}> 
    <div className="flex flex-wrap min-h-screen items-centre">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/*themebutton*/}
        </div>
        <div className="w-full max-w-sm mx-auto">
          {/* Card */}
        </div>
      </div>

    </div>
    </ThemeProvider>
  )
}

export default App
