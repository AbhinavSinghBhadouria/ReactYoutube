import {createContext, useContext} from 'react';


// export const ThemeContext=createContext(); isme koe default value nhi h

// chlo abb dekhte h kese default value de skte h
// default value m hm object pass kr skte h
export const ThemeContext= createContext({
    theme:'light',
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}