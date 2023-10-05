import React, { useEffect, useState } from 'react'
import './themes.css'
import { BsSun, BsMoon } from 'react-icons/bs'


const getStorageTheme=()=>{
  let theme='light-theme'
  if(localStorage.getItem('theme')){
    theme=localStorage.getItem('theme')
  }

  return theme
}

const Themes = () => {
  const [showSwitcher,setShowSwitcher] =useState(false)
  
  const [theme,setTheme] = useState(getStorageTheme())


  const toggleTheme=() =>{
    if(theme ==='light-theme'){
      setTheme('dark-theme')
    }
    else{
      setTheme('light-theme')
    }
  }


  useEffect(()=>{
    document.documentElement.className= theme
    localStorage.setItem('theme',theme)
  },[theme])


  return (
    <div>
    <div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>

       <div className="theme__toggler" onClick={toggleTheme}>
            {theme === 'light-theme' ? <BsMoon/>:<BsSun/>  }
       </div>

     </div>
    </div>  
  )
}

export default Themes
