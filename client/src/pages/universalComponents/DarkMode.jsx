import { combineEventUis } from '@fullcalendar/core/internal';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

function DarkMode() {
  const [ theme, setTheme ] = useState('');

  const toggleTheme = () => {
    if (!theme) {
      document.documentElement.setAttribute("data-bs-theme", "dark")
      setTheme('dark')
      console.log(theme)
    } 
    if (theme === "dark") {
      document.documentElement.setAttribute("data-bs-theme", "light")
      setTheme('light')
      console.log(theme)
    } 
  }

    
  return (
    <div>
      <Button onClick={() => toggleTheme()}>
        DarkMode
      </Button>
    </div>
  )
}

export default DarkMode